#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <math.h>
#include "dlab_def.h"

#define MAXS 10000

// Global variables
float theta[MAXS];
float ref[MAXS];

float Kp = 1.0;
float Ti = 1.0;       // Integral time constant
float Td = 0.01;      // Derivative time constant
int N = 20;           // Filter coefficient
float Tt = 0.01;      // Anti-windup time constant

float run_time = 10.0;
float Fs = 200.0;
int motor_number = 1;
sem_t data_avail;

char input_type = 's';
float step_magnitude = 5.0 * M_PI / 18.0;
float square_magnitude = 5.0 * M_PI / 18.0;
float square_freq = 0.5;
float square_duty = 50.0;

void *Control(void *arg);

int main() {
    pthread_t ControlThread;
    char selection;
    int no_of_samples;

    sem_init(&data_avail, 0, 0);

    while (1) {
        printf("\nMenu:\n");
        printf("r: Run the control algorithm\n");
        printf("p: Change value of Kp\n");
        printf("i: Change value of Ti\n");
        printf("d: Change value of Td\n");
        printf("n: Change value of N\n");
        printf("f: Change value of sample frequency, Fs\n");
        printf("t: Change value of total run time, Tf\n");
        printf("u: Change the type of inputs (Step or Square)\n");
        printf("g: Plot motor position on screen\n");
        printf("h: Save a hard copy of the plot in Postscript\n");
        printf("q: Exit\n");
        printf("Enter your selection: ");
        scanf(" %c", &selection);

        switch (selection) {
            case 'r':
                no_of_samples = (int)(run_time * Fs);
                Initialize(Fs, motor_number);
                pthread_create(&ControlThread, NULL, Control, NULL);
                pthread_join(ControlThread, NULL);
                Terminate();
                break;

            case 'p':
                printf("Enter new value of Kp: ");
                scanf("%f", &Kp);
                break;

            case 'i':
                printf("Enter new value of Ti: ");
                scanf("%f", &Ti);
                break;

            case 'd':
                printf("Enter new value of Td: ");
                scanf("%f", &Td);
                break;

            case 'n':
                printf("Enter new value of N: ");
                scanf("%d", &N);
                break;

            case 'f':
                printf("Enter new value of Fs: ");
                scanf("%f", &Fs);
                break;

            case 't':
                printf("Enter new value of run time (Tf): ");
                scanf("%f", &run_time);
                break;

            case 'u':
                printf("Enter input type (s for Step, q for Square): ");
                scanf(" %c", &input_type);
                if (input_type == 's') {
                    printf("Enter step magnitude (in degrees): ");
                    scanf("%f", &step_magnitude);
                    step_magnitude = step_magnitude * M_PI / 180.0;
                    for (int i = 0; i < MAXS; i++) {
                        ref[i] = step_magnitude;
                    }
                } else if (input_type == 'q') {
                    printf("Enter square magnitude (in degrees): ");
                    scanf("%f", &square_magnitude);
                    square_magnitude = square_magnitude * M_PI / 180.0;
                    printf("Enter square frequency (in Hz): ");
                    scanf("%f", &square_freq);
                    printf("Enter square duty cycle (in %%): ");
                    scanf("%f", &square_duty);
                    Square(ref, MAXS, Fs, square_magnitude, square_freq, square_duty);
                }
                break;

            case 'g':
                no_of_samples = (int)(run_time * Fs);
                plot(ref, theta, Fs, no_of_samples, SCREEN, "Motor Position", "Time (s)", "Position (rad)");
                break;

            case 'h':
                no_of_samples = (int)(run_time * Fs);
                plot(ref, theta, Fs, no_of_samples, PS, "Motor Position", "Time (s)", "Position (rad)");
                break;

            case 'q':
                sem_destroy(&data_avail);
                printf("Exiting program.\n");
                exit(0);

            default:
                printf("Invalid selection. Please try again.\n");
                break;
        }
    }

    return 0;
}

// Control function with Anti-Windup PID implementation
void *Control(void *arg) {
    int k = 0;
    int no_of_samples = (int)(run_time * Fs);
    float Ts = 1.0 / Fs;
    float motor_position, ek, ek_prev = 0, I_k = 0, D_k = 0, D_k_prev = 0, uk, vk, ak, ak_prev = 0;

    while (k < no_of_samples) {
        sem_wait(&data_avail);

        motor_position = EtoR(ReadEncoder());
        ek = ref[k] - motor_position;

        // Compute v(k)
        vk = Kp * ek + I_k + D_k;

        // Actuator Saturation Model: u(k) = satblk(v(k))
        if (vk > 3.0) {
            uk = 3.0;
        } else if (vk < -3.0) {
            uk = -3.0;
        } else {
            uk = vk;
        }

        // Anti-Windup Correction: a(k) = u(k) - v(k)
        ak = uk - vk;

        // Update Integral Term
        I_k = I_k + (Kp / Ti) * ek_prev * Ts + (1 / Tt) * ak_prev * Ts;

        // Update Derivative Term with Filtering
        float alpha = Td / (N * Ts + Td);
        float beta = (Kp * Td * N) / (N * Ts + Td);
        D_k = alpha * D_k_prev + beta * (ek - ek_prev);

        // Apply Control Output
        DtoA(VtoD(uk));

        // Store data and update variables
        theta[k] = motor_position;
        ek_prev = ek;
        ak_prev = ak;
        D_k_prev = D_k;
        k++;
    }

    pthread_exit(NULL);
}
