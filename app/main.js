import CharactersController from "./Controllers/CharactersController.js";

class App {
  constructor() {
    this.charactersController = new CharactersController();
  }
}

window["app"] = new App();
