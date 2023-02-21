"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} age ${this.age}`);
    }
}
const shakib = new Player('Shakib', 43, 'Bangladesh');
const Tamim = new Player('Tamim', 43, 'Bangladesh');
console.log(shakib.age, 'privet');
shakib.play();
const players = [];
players.push(shakib);
players.push(Tamim);
console.log(players);
