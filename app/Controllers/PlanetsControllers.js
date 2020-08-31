import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";

function _draw() {
  console.log("Planet Draw");
}
export default class PlanetsController {
  constructor() {
    // FIXME _draw();
    // NOTE register subscribers first
    ProxyState.on("planets", _draw);
    // Go get the relevant data
    planetsService.getPlanets();
  }
}
