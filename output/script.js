"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} age ${this.age}`);
    }
}
const shakib = new Player('Shakib', 43, 'Bangladesh');
const Tamim = new Player('Tamim', 43, 'Bangladesh');
shakib.play();
const players = [];
players.push(shakib);
players.push(Tamim);
console.log(players);
