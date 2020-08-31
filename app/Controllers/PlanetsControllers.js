import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";

function _draw() {
  let template = "";
  let worlds = ProxyState.planets;
  worlds.forEach((p) => (template += p.Template));
  document.getElementById("planets").innerHTML = template;
}
export default class PlanetsController {
  constructor() {
    // NOTE register subscribers first
    ProxyState.on("planets", _draw);
    // Go get the relevant data
    planetsService.getPlanets();
  }

  next() {
    planetsService.next();
  }

  previous() {
    planetsService.previous();
  }
}
