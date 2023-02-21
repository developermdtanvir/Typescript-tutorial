"use strict";
// let myFunc : Function;
// myFunc = (a : string, b : string , c? : string)  =>{
//     console.log(`my Name is ${a} and i am a ${b}`);
// }
// typescript: void vs javascript:  undefined  : - interview question
// void mens now value 
//undefiend is value
//default value pass :-
const myFunc = (a, b, c = 'true') => {
    console.log(c);
    console.log(`my Name is ${a} and i am a ${b}`);
    return a + b;
};
myFunc('Tanvir', 'student', 'false');
//const myFunc: (a: string, b: string, c?: string) => void this mens i am not return 
// const myFunc: (a: string, b: string, c?: string) => string 
