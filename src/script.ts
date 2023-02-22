import Player from "./classes/Player/Player.js"
import { isPlayer } from "./interfaces/isPlayer.js"



let shakib : isPlayer

shakib = new Player('Shakib',43,'Bangladesh')

const Tamim = new Player('Tamim',43,'Bangladesh')

shakib.play()

const players : Player[] = []

players.push(shakib);
players.push(Tamim);

console.log(players);

interface RactangleOptions {

    width:number,

    height:number
}

function drawRactangle(options:RactangleOptions) :number {
    let width = options.width;
    let height = options.height

    return width + height;
}

    drawRactangle({
    width:20,
    height:40
});



