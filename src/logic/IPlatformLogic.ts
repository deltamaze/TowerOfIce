// import gamegontext
import { GameContext } from "../GameContext";

export default interface IPlatformLogic {
  // initialize platforms
  initPlatforms(context: GameContext): void;
}