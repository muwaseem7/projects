#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <math.h>
#include "dlab_def.h"

#define MAXS 10000 // Maximum number of samples

// Global variables
float theta[MAXS]; // Array for storing motor position
float ref[MAXS];   // Array for storing reference input
float Kp = 1.0;    // Proportional gain (initialized to 1.0)
float run_time = 10.0; // Total run time in seconds
float Fs = 200.0;  // Sampling frequency in Hz
int motor_number = 1; // Motor number (change as needed)
sem_t data_avail;  // Semaphore for data availability
char input_type = 's'; // Input type: 's' for step, 'q' for square
float step_magnitude = 5.0 * M_PI / 18.0; // Step magnitude (50 degrees in radians)
float square_magnitude = 5.0 * M_PI / 18.0; // Square wave magnitude
float square_freq = 0.5; // Square wave frequency (Hz)
float square_duty = 50.0; // Square wave duty cycle (%)

// Function prototypes
void *Control(void *arg);

int main() {
    pthread_t ControlThread;
    char selection;
    int no_of_samples;

    // Initialize the semaphore
    sem_init(&data_avail, 0, 0);

    while (1) {
        // Print menu
        printf("\nMenu:\n");
        printf("r: Run the control algorithm\n");
        printf("p: Change value of Kp\n");
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
                // Run the control algorithm
                no_of_samples = (int)(run_time * Fs);
                Initialize(Fs, motor_number);
                pthread_create(&ControlThread, NULL, Control, NULL);
                pthread_join(ControlThread, NULL);
                Terminate();
                break;

            case 'p':
                // Change value of Kp
                printf("Enter new value of Kp: ");
                scanf("%f", &Kp);
                break;

            case 'f':
                // Change value of sample frequency, Fs
                printf("Enter new value of Fs: ");
                scanf("%f", &Fs);
                break;

            case 't':
                // Change value of total run time, Tf
                printf("Enter new value of run time (Tf): ");
                scanf("%f", &run_time);
                break;

            case 'u':
                // Change the type of inputs (Step or Square)
                printf("Enter input type (s for Step, q for Square): ");
                scanf(" %c", &input_type);
                if (input_type == 's') {
                    printf("Enter step magnitude (in degrees): ");
                    scanf("%f", &step_magnitude);
                    step_magnitude = step_magnitude * M_PI / 180.0; // Convert to radians
                    for (int i = 0; i < MAXS; i++) {
                        ref[i] = step_magnitude;
                    }
                } else if (input_type == 'q') {
                    printf("Enter square magnitude (in degrees): ");
                    scanf("%f", &square_magnitude);
                    square_magnitude = square_magnitude * M_PI / 180.0; // Convert to radians
                    printf("Enter square frequency (in Hz): ");
                    scanf("%f", &square_freq);
                    printf("Enter square duty cycle (in %%): ");
                    scanf("%f", &square_duty);
                    Square(ref, MAXS, Fs, square_magnitude, square_freq, square_duty);
                }
                break;

            case 'g':
                // Plot motor position on screen
                no_of_samples = (int)(run_time * Fs);
                plot(ref, theta, Fs, no_of_samples, SCREEN, "Motor Position", "Time (s)", "Position (rad)");
                break;

            case 'h':
                // Save a hard copy of the plot in Postscript
                no_of_samples = (int)(run_time * Fs);
                plot(ref, theta, Fs, no_of_samples, PS, "Motor Position", "Time (s)", "Position (rad)");
                break;

            case 'q':
                // Exit the program
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

void *Control(void *arg) {
    int k = 0;
    int no_of_samples = (int)(run_time * Fs);
    float motor_position, ek, uk;

    while (k < no_of_samples) {
        sem_wait(&data_avail); // Wait for data to be available
        motor_position = EtoR(ReadEncoder()); // Read motor position in radians
        ek = ref[k] - motor_position; // Calculate tracking error
        uk = Kp * ek; // Calculate control value (Proportional Control)
        DtoA(VtoD(uk)); // Send control value to D/A converter
        theta[k] = motor_position; // Store motor position for plotting
        k++;
    }

    pthread_exit(NULL);
}
