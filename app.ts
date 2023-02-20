

    // text number type checkup : using Typescript

const country = "Japan"

function fullName(fristName:string,lastName:string):string{
    return `${fristName} ${lastName}`
}

const user:string = fullName('Tanvir','Hossain');
console.log(user);

function dubbleItConsole(num:number):void{
    const rejult:number = num*2;
    console.log(rejult) 
}

 // function formatiog
  let  multiplay:(x:number,y:number)   => number;
 multiplay = (x,y) => x*y;

 // arry using Typescript :-

 let numbers:number[] = [10,20,25,30,40];

 numbers.push(10);


// Arry of Typescript :-
let friendsName:string[];
    let megaName:string = '';
    friendsName = ['Tanvir','Shakil','Roni','kamal','jamal'];
    for (let i = 0; i < friendsName.length; i++) {
        const element:string = friendsName[i];
        if(element.length>megaName.length){
            megaName = element;
        }
    }
console.log(megaName)


// object of typescript :-

let data :{ name:string,roll:number,class:string }
data = {name:'Tanvir',roll:20,class:'Inter'};
data.name = 'Kamal';

//  typescript interface :-

interface Player{
    name:string,
    club:string,
    age:number,
    salary:number,
    wife?:string,
    isPlaying:boolean
}
const messi:Player = {
    name:'Tanvir',
    club:'Paris',
    age:32,
    salary:10000,
    isPlaying:true,
    wife:'SannyLion',
}
const ronaldo:Player = {
    name:'Ronaldo',
    club:'Real Mardis',
    age:30, 
    salary:2000,
    isPlaying:true
}

const getBonus = (player:Player):number =>{
    return player.salary * .10;
}
console.log(getBonus(messi));
console.log(getBonus(ronaldo));



// Typescipt Class create 

class Person {
    name:string ;
    private _partner:string;
    readonly fatherName :string;
    constructor(name:string,fatherName:string){
        this.name = name;   
        this._partner = name;
        this.fatherName  = fatherName
    }
    protected getName():string{
        return this.name + " " + this._partner;
    }
}
const tan = new Person('Tanvir','Mannan');
console.log(tan.name,tan.fatherName);

for (let i = 0; i < 100; i++) {
    console.log(i)
}