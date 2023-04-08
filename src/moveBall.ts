import { ball, floor } from '.';

// add ball velocity
let ballVelocity = {
  x: 0,
  y: 0,
};
// add ball acceleration
let ballAcceleration = {
  x: 0,
  y: 0,
};
// add ball force
let ballForce = {
  x: 0,
  y: 0,
};
// add ball mass
const ballMass = 1;
// add ball friction
const ballFriction = 0.99;
// add ball gravity
const ballGravity = 0.1;
// add ball bounce
const ballBounce = 0.9;
// move ball
export const moveBall = (nearestPlatform) => {
  // add ball acceleration
  ballAcceleration.x = ballForce.x / ballMass;
  ballAcceleration.y = ballForce.y / ballMass;

  // add ball velocity
  ballVelocity.x += ballAcceleration.x;
  ballVelocity.y += ballAcceleration.y;

  // add ball friction
  ballVelocity.x *= ballFriction;
  ballVelocity.y *= ballFriction;

  // add ball gravity
  ballVelocity.y += ballGravity;

  // add ball position
  ball.x += ballVelocity.x;
  ball.y += ballVelocity.y;

  // add ball bounce
  if (ball.y + ball.height > nearestPlatform.y) {
    ball.y = nearestPlatform.y - ball.height;
    ballVelocity.y *= -ballBounce;
  }

  // reset ball force
  ballForce.x = 0;
  ballForce.y = 0;
};
