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
// interface with Generic uses Example
//enum 
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
;
const Ransponse1 = {
    status: 200,
    type: ResType.SUCCESS,
    data: {
        name: "Tanvir",
        age: 30,
        id: 20
    }
};
console.log(Ransponse1);
