"use strict";
let firstName = "Leticia";
firstName = 10;
console.log(firstName);
function isEven(numero) {
    if (!numero) {
        return false;
    }
    return numero % 2 === 0;
}
const isEvenArrow = (numero) => {
    return numero % 2 === 0;
};
console.log(isEven());
let fruits = ["Banana", "Apple"];
let fruits2 = ["Banana", "Apple"];
let fruits3 = ["Banana", "Apple"];
let tuplas = ["Item 1", "Item 2"];
function formatValue(value) {
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
formatValue("UMA STRING QUALQUER");
formatValue(42);
let fruits4 = ["Banana", "Apple", 10];
let fruits5 = ["Banana", "Apple"];
let user = {
    name: "Bianca",
    email: "bianca@bianca.com",
    profile: "admin",
    sayMyName: () => console.log("hey hey")
};
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sayMyName() {
        console.log(`Say my name, ${this.name}`);
    }
}
const person = new Person("Gabriel", "gabriel@gabriel.com");
person.sayMyName();
