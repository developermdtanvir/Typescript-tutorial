import { isPlayer } from "../../interfaces/isPlayer.js"
export default class Player implements isPlayer {

    constructor( 
        public  name:string,

        readonly  age:number,
      
        public  country:string){}
    play(){
        console.log(`${this.name} from ${this.country} age ${this.age}`)
    }
}