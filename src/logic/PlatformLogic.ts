// import gamegontext
import GameContext from "../context/GameContext";

class PlatformLogic implements IPlatformLogic {
  // initialize platforms
  initPlatforms(context: GameContext): void {
    // set up floor platform
    context.platforms = [{ x: 0, y: 700 }];
    //generate 999 random platforms
    for (let i = 0; i < 999; i++) {
      // generate random x and y coordinates
      let x = Math.floor(Math.random() * 100);
      let y = i * 10;
      // push the platform to the array
      context.platforms.push({ x: x, y: y });
    }
  }
}