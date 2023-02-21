class Player {
    name:string;

    age:number;

    country:string


    constructor(n : string, a : number, c : string){

        this.name = n,

        this.age = a,

        this.country = c
    }
    play(){
        console.log(`${this.name} from ${this.country} age ${this.age}`)
    }
}


const shakib = new Player('Shakib',43,'Bangladesh')
const Tamim = new Player('Tamim',43,'Bangladesh')
shakib.play()

const players : Player[] = []

players.push(shakib);
players.push(Tamim);

console.log(players)



// binary number before ob 
let bin = 0b100010101010;
let anotherBin: number = 0B010;

// octal number before 0o
let octal = 0o1012467;

// haxadecimal before OXA

let hexadecimal = 0XA2052ABCDEF;