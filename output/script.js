"use strict";
//Generic 
const addId = (obj) => {
    let id = Math.round(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Tanvir",
    age: 40
});
const Ransponse1 = {
    status: 200,
    type: "json type",
    data: {
        name: "Tanvir",
        age: 30,
        id: 20
    }
};
