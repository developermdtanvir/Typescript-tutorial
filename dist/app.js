"use strict";
// text number type checkup : using Typescript
const country = "Japan";
function fullName(fristName, lastName) {
    return `${fristName} ${lastName}`;
}
const user = fullName('Tanvir', 'Hossain');
console.log(user);
function dubbleItConsole(num) {
    const rejult = num * 2;
    console.log(rejult);
}
// function formatiog
let multiplay;
multiplay = (x, y) => x * y;
// arry using Typescript :-
let numbers = [10, 20, 25, 30, 40];
numbers.push(10);
// Arry of Typescript :-
let friendsName;
let megaName = '';
friendsName = ['Tanvir', 'Shakil', 'Roni', 'kamal', 'jamal'];
for (let i = 0; i < friendsName.length; i++) {
    const element = friendsName[i];
    if (element.length > megaName.length) {
        megaName = element;
    }
}
console.log(megaName);
// object of typescript :-
let data;
data = { name: 'Tanvir', roll: 20, class: 'Inter' };
data.name = 'Kamal';
const messi = {
    name: 'Tanvir',
    club: 'Paris',
    age: 32,
    salary: 10000,
    isPlaying: true,
    wife: 'SannyLion',
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Real Mardis',
    age: 30,
    salary: 2000,
    isPlaying: true
};
const getBonus = (player) => {
    return player.salary * .10;
};
console.log(getBonus(messi));
console.log(getBonus(ronaldo));
// Typescipt Class create 
class Person {
    constructor(name, fatherName) {
        this.name = name;
        this._partner = name;
        this.fatherName = fatherName;
    }
    getName() {
        return this.name + " " + this._partner;
    }
}
const tan = new Person('Tanvir', 'Mannan');
console.log(tan.name, tan.fatherName);
for (let i = 0; i < 100; i++) {
    console.log(i);
}
