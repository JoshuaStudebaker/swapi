import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class PlanetsService {
  getPlanets() {
    // NOTE "GET" is the method to retrieve data
    api
      .get("planets")
      .then((res) => {
        ProxyState.nextPlanet = res.data.nextPlanet;
        ProxyState.planets = res.data.results.map((c) => new Planet(c));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  next() {
    if (ProxyState.nextPlanet) {
      api
        .get(ProxyState.nextPlanet)
        .then((res) => {
          ProxyState.previousPlanet = res.data.previousPlanet;
          ProxyState.nextPlanet = res.data.nextPlanet;
          ProxyState.planets = res.data.results.map((c) => new Planet(c));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  previous() {
    if (ProxyState.previousPlanet) {
      api
        .get(ProxyState.previousPlanet)
        .then((res) => {
          ProxyState.previousPlanet = res.data.previousPlanet;
          ProxyState.nextPlanet = res.data.nextPlanet;
          ProxyState.planets = res.data.results.map((c) => new Planet(c));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}

export const planetsService = new PlanetsService();
