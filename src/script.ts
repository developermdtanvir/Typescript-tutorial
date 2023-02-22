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

//enum 

enum ResType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIrefarance <T> {
    status: number,
    type: ResType,
    data:T
}

const Ransponse1 : APIrefarance <object> = {
    status:200,
    type:ResType.SUCCESS,
    data:{
        name:"Tanvir",
        age:30,
        id:20
    }
}

console.log(Ransponse1);



