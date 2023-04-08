import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 400,
  height: 800,
});

// white background
app.renderer.backgroundColor = 0xffffff; 
// black border
app.renderer.view.style.border = '1px solid black';

// add floor rectangle
const floor = new PIXI.Graphics();
floor.beginFill(0x000000);
floor.drawRect(0, 0, 400, 10);
floor.endFill();
floor.y = 700;
app.stage.addChild(floor);

// add ball
const ball = new PIXI.Graphics();
ball.beginFill(0x000000);
ball.drawCircle(0, 0, 10);
ball.endFill();
ball.x = 200;
ball.y = 200;
app.stage.addChild(ball);

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
const moveBall = () => {
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
  if (ball.y + ball.height > floor.y) {
    ball.y = floor.y - ball.height;
    ballVelocity.y *= -ballBounce;
  }

  // reset ball force
  ballForce.x = 0;
  ballForce.y = 0;
};

// process frame
const processFrame = () => {
  moveBall();
  requestAnimationFrame(processFrame);
};

// start frame
requestAnimationFrame(processFrame);


document.body.appendChild(app.view);
