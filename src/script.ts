type stringOrNum = string | number;
type userType = {name : string,age : number}


const userDetails = (id : stringOrNum, user : userType) => { 
    console.log(`User id is ${id} , name is ${user.name} age is ${user.age}`)
}

const sayHello = (user: userType) =>{
    console.log(`hello ${user.age >50 ? 'Sir':'Mr'} ${user.name}`)
}

sayHello({
    name:'Tanvir',
    age:51
})