import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class CharactersService {


  getCharacters() {
    // NOTE "GET" is the method to retrieve data
    api.get('people')
      .then(res => {
        ProxyState.next = res.data.next
        ProxyState.characters = res.data.results.map(c => new Character(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.next) {
      api.get(ProxyState.next)
        .then(res => {
          ProxyState.previous = res.data.previous
          ProxyState.next = res.data.next
          ProxyState.characters = res.data.results.map(c => new Character(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.previous) {
      api.get(ProxyState.previous)
        .then(res => {
          ProxyState.previous = res.data.previous
          ProxyState.next = res.data.next
          ProxyState.characters = res.data.results.map(c => new Character(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const charactersService = new CharactersService();