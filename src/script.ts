/*
let add : (x : number, y : number) => number;

add = (a : number, b : number) => {
    return a + b;
}

console.log(add(20,20))

*/

/* let calculation : (x : number, y : number , z : string) => number;

calculation = (a : number, b : number, c : string) =>{
    if(c === 'add'){
        return a + b;
    }
    
    else{
        return a - b;
    }
}

console.log(calculation(20,10,'minus'))

*/

type userInfo =  { name: string , age: number}
type id = number | string;

let userDetails : (id :id, userInfo:userInfo ) => void;

userDetails = (id : id , userInfo:userInfo) =>{
}