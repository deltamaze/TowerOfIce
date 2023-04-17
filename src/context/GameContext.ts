// import ball context
import BallContext from "./BallContext";

export default class GameContext {
  cameraVerticalOffset: number;
  ball: BallContext;
  platforms: { x: number; y: number; }[];
  floorsCleared: number;

  constructor() {
    this.cameraVerticalOffset = 0;
    this.ball = new BallContext(0, 0, 0, 0);
    this.platforms = [{ x: 0, y: 700 }];
    this.floorsCleared = 0;
  }
}
