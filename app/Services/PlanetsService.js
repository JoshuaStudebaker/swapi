import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { apiPlanet } from "./AxiosService.js";

class PlanetsService {
  getPlanets() {
    // NOTE "GET" is the method to retrieve data
    apiPlanet
      .get("planets")
      .then((res) => {
        ProxyState.next = res.data.next;
        ProxyState.planets = res.data.results.map((c) => new Planet(c));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  next() {
    if (ProxyState.next) {
      apiPlanet
        .get(ProxyState.next)
        .then((res) => {
          ProxyState.previous = res.data.previous;
          ProxyState.next = res.data.next;
          ProxyState.planets = res.data.results.map((c) => new Planet(c));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  previous() {
    if (ProxyState.previous) {
      apiPlanet
        .get(ProxyState.previous)
        .then((res) => {
          ProxyState.previous = res.data.previous;
          ProxyState.next = res.data.next;
          ProxyState.planets = res.data.results.map((c) => new Planet(c));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}

export const planetsService = new PlanetsService();
