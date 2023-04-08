import * as PIXI from 'pixi.js';
  import { moveBall } from './moveBall';

const app = new PIXI.Application<HTMLCanvasElement>({
  width: 400,
  height: 800,
  backgroundColor: 0xffffff
});

// black border
app.renderer.view.style.border = '1px solid black';

// add floor rectangle
export const floor = new PIXI.Graphics();
floor.beginFill(0x000000);
floor.drawRect(0, 0, 400, 10);
floor.endFill();
floor.y = 700;
app.stage.addChild(floor);

// add ball
export const ball = new PIXI.Graphics();
ball.beginFill(0x000000);
ball.drawCircle(0, 0, 10);
ball.endFill();
ball.x = 200;
ball.y = 200;
app.stage.addChild(ball);

// process frame
const processFrame = () => {
  moveBall(floor);
  requestAnimationFrame(processFrame);
};

// start frame
requestAnimationFrame(processFrame);

document.body.appendChild(app.view);
