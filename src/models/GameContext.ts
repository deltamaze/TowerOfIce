class GameContext {
  cameraVerticalOffset: number;
  ballPosition: { x: number; y: number; };
  platforms: { x: number; y: number; }[];

  constructor() {
    this.cameraVerticalOffset = 0;
    this.ballPosition = { x: 0, y: 0 };
    // initialize platforms with a single platform at the bottom of the screen
    this.platforms = [{ x: 0, y: 700 }];
  }

}