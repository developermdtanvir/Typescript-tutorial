export default class Player {

    constructor( 
        protected  name:string,

        readonly  age:number,
      
        private  country:string){}
    play(){
        console.log(`${this.name} from ${this.country} age ${this.age}`)
    }
}