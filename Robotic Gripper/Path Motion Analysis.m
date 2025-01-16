clear all;
close all;

% Define the lengths of the links in cm and independent variables

r1=6.0; % ground
r2=3.0; % input
r3=9.0; % follower
r4=6.0; % coupler
r5=4.0; % fixed

% Values for input link motion

omega2 = 10
alpha2 = 0

% Define the position of C with respect to point B

r6=4.0;
r7=3.0;
r8=6.0;
alpha=70*(pi/180);
beta=130*(pi/180);

%Angle of link 5

n=60;
theta5=n*(pi/180);
ri=sqrt((r1^2)+(r5^2)-2*r1*r5*cos((180*(pi/180))-theta5));
theta1 = asin((r5*sin(pi-theta5))/ri)
theta21=-theta1:deg2rad(1):2*pi;

% Calculate non-dimensional ratios

h1=ri/r2;
h2=ri/r3;
h3=ri/r4;
h4=(-ri^2-r2^2-r3^2+r4^2)/(2*r2*r3);
h5=(ri^2+r2^2-r3^2+r4^2)/(2*r2*r4);

% Calculate the position of C w.r.t. B

rCB=-11.72;
betaC=24.556*(pi/180);

% Position of C w.r.t. Link Joint 4/5

rC = 6.47
thetac = 2.44

for i=1:length(theta21)
a=-h1+(1+h2)*cos(theta21(i))+h4;
b=-2*sin(theta21(i));
c=h1-(1-h2)*cos(theta21(i))+h4;
d=-h1+(1-h3)*cos(theta21(i))+h5;
e=h1-(1+h3)*cos(theta21(i))+h5;

% First loop

theta31(i)=2*atan((-b-(b^2-4*a*c)^.5)/(2*a));
theta41(i)=2*atan((-b-(b^2-4*d*e)^.5)/(2*d));

% Vector paths for C w.r.t. B

xC0(i)=r2*cos(theta21(i))+r3*cos(theta31(i))+rCB*cos(theta41(i)+betaC);
yC0(i)=r2*sin(theta21(i))+r3*sin(theta31(i))+rCB*sin(theta41(i)+betaC);
% Rotation to Standard Axis
M = [cos(theta1) -sin(theta1); sin(theta1) cos(theta1)]
V = [xC0(i);yC0(i)]
J = M*V
xC1(i) = J(1)
yC1(i) = J(2)

%angular velocities

omega31(i)=(r2*omega2/r3)*sin(theta21(i)-theta41(i))/sin(theta41(i)-theta31(i));
omega41(i)=(r2*omega2/r4)*sin(theta21(i)-theta31(i))/sin(theta41(i)-theta31(i));

% Linear Velocity of point C on the coupler

vel_xC(i)=-rC*omega41(i)*sin(theta41(i)-2.44);
vel_yC(i)= rC*omega41(i)*cos(theta41(i)-2.44);

% Acceleration analysis

part1=-r2*omega2^2*cos(theta21(i)-theta41(i))-r2*alpha2*sin(theta21(i)-theta41(i))-r3*omega31(i)^2*cos(theta31(i)-theta41(i))+r4*omega41(i)^2;
part2=r3*sin(theta31(i)-theta41(i));
alpha31(i)=part1/part2;
part3=-r2*omega2^2*cos(theta21(i)-theta31(i))-r2*alpha2*sin(theta21(i)-theta31(i))-r3*omega31(i)^2 + r4*omega41(i)^2*cos(theta31(i)-theta41(i));
part4=r4*sin(theta31(i)-theta41(i));
alpha41(i)=part3/part4;

% Linear Acceleration of point C on the coupler

acc_xC(i)=rC*omega41(i)^2*cos(theta41(i)-2.44+pi)+rC*alpha41(i)*cos(theta41(i)-2.44+pi/2);
acc_yC(i)=rC*omega41(i)^2*sin(theta41(i)-2.44+pi)+rC*alpha41(i)*sin(theta41(i)-2.44+pi/2);

end

% Path Graph

figure(2);
plot(xC1,yC1,'k-')
h=legend('Path of C');
xlabel('X -coordinate (cm)'),ylabel('y - coordinate (cm)');

%Coupler Motion Analysis

figure;

% Displacement

subplot(3,1,1);plot(rad2deg(theta21)+rad2deg(theta1),xC1,'b-',rad2deg(theta21)+rad2deg(theta1),yC1,'b --');
xlabel('Theta2(deg)'),ylabel('displacements of C (cm)');
xticks([0 30 60 90 120 150 180 210 240 270 300 330 360])
h=legend('X-Component of Point C', 'Y-Component of Point C');
axis([0 360 round(min(min(xC1),min(yC1)))*1.2
round(max(max(xC1),max(yC1)))*1.5]);

%Velocity

subplot(3,1,2);plot(rad2deg(theta21)+rad2deg(theta1),vel_xC,'r-',rad2deg(theta21)+rad2deg(theta1),vel_yC,'r --');
xlabel('Theta2(deg)'),ylabel('Velocities of C (cm/s)');
xticks([0 30 60 90 120 150 180 210 240 270 300 330 360])
h=legend('X-Velocity of Point C', 'Y-Velocity of Point C');
axis([0 360 round(min(min(vel_xC),min(vel_yC)))*1.5
round(max(max(vel_xC),max(vel_yC)))*1.5]);

%Acceleration

subplot(3,1,3);plot(rad2deg(theta21)+rad2deg(theta1),acc_xC,'g-',rad2deg(theta21)+rad2deg(theta1),acc_yC,'g --');
xlabel('Theta2(deg)'),ylabel('Velocities of C (cm/s2)');
xticks([0 30 60 90 120 150 180 210 240 270 300 330 360])
h=legend('X-Acceleration of Point C', 'Y-Acceleration of Point C');
axis([0 360 round(min(min(acc_xC),min(acc_yC)))*1.5
round(max(max(acc_xC),max(acc_yC)))*1.5]);

%Angular Motion Analysis

figure;

%Angular Position

subplot(3,1,1);plot(rad2deg(theta21)+rad2deg(theta1),rad2deg(theta31)+rad2deg(t
heta1),'b-',rad2deg(theta21)+rad2deg(theta1),rad2deg(theta41)+rad2deg(theta1),'b --');
xlabel('Theta2(deg)'),ylabel('theta (deg)');
xticks([0 30 60 90 120 150 180 210 240 270 300 330 360])
h=legend('Theta 3', 'Theta 4');
axis([0 360 round(min(min(rad2deg(theta31)),min(rad2deg(theta41))))
round(max(max(rad2deg(theta31)),max(rad2deg(theta41))*1.5))]);

%Angular Velocity

subplot(3,1,2);plot(rad2deg(theta21)+rad2deg(theta1),rad2deg(omega31),'r-',rad2deg(theta21)+rad2deg(theta1),rad2deg(omega41),'r --');
xlabel('Theta2(deg)'),ylabel('Omega (deg/s)');
xticks([0 30 60 90 120 150 180 210 240 270 300 330 360])
h=legend('Omega 3', 'Omega 4');
axis([0 360 round(min(min(rad2deg(omega31)),min(rad2deg(omega41))))
round(max(max(rad2deg(omega31)),max(rad2deg(omega41))*1.5))]);

%Angular Acceleration

subplot(3,1,3);plot(rad2deg(theta21)+rad2deg(theta1),rad2deg(alpha31),'g-',rad2deg(theta21)+rad2deg(theta1),rad2deg(alpha41),'g --');
xlabel('Theta2(deg)'),ylabel('Alpha (deg/s^2)');
xticks([0 30 60 90 120 150 180 210 240 270 300 330 360])
h=legend('Omega 3', 'Omega 4');
axis([0 360 round(min(min(rad2deg(alpha31)),min(rad2deg(alpha41))))
round(max(max(rad2deg(alpha31)),max(rad2deg(alpha41))*1.5))]);
