export default class Character {
  constructor({ name, height, hair_color, eye_color, birth_year }) {
    this.name = name
    this.height = height
    this.hairColor = hair_color
    this.eyeColor = eye_color
    this.birthYear = birth_year
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.birthYear}
      </div>
    </div>
    `
  }
}