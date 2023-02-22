//Generic 

const addId =<T extends { name:string, age:number }> (obj:T) =>{
    let id = Math.round(Math.random()*100);
    return {...obj, id}
}

let user = addId({
    name:"Tanvir",
    age:40
});


// interface with Generic uses Example

interface APIrefarance <T> {
    status: number,
    type: string,
    data:T
}

const Ransponse1 : APIrefarance <object> = {
    status:200,
    type:"json type",
    data:{
        name:"Tanvir",
        age:30,
        id:20
    }
}



