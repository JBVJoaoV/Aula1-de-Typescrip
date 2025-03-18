let firstName: string | number = "Leticia"
firstName = 10
console.log(firstName)

function isEven(numero?: number) {
    if(!numero){
        return false;
    }
    return numero % 2 === 0;
}

const isEvenArrow = (numero: number): boolean => {
    return numero % 2 === 0
};

console.log(isEven())

let fruits = ["Banana", "Apple"]
let fruits2: string[] = ["Banana", "Apple"]
let fruits3: Array<string> = ["Banana", "Apple"]

let tuplas: [string, string] = ["Item 1", "Item 2"]

function formatValue(value: string | number) {
    if(typeof value === "string"){
        console.log(value.toLowerCase())
    }
    if(typeof value === "number"){
        console.log(value.toFixed(2))
    }
    
}

formatValue("UMA STRING QUALQUER")
formatValue(42)

let fruits4: (string | number | boolean | string[] | (string | number[]))[] = ["Banana", "Apple", 10]
let fruits5: Array<string | number> = ["Banana", "Apple"]

type State = "BA" | "MG" | "SP" | "SC"

type Address = {
    street: string;
    number: string;
    complement?: string;
    city: string;
    state: State;
}

type User = {
    name: string;
    email: string;
    profile: "admin" | "manager" | "regular";
    age?: number;
    address?: Address;
    sayMyName: (name: string) => boolean;
}

let user: User = {
    name: "Bianca",
    email: "bianca@bianca.com",
    profile: "admin",
    sayMyName: (name: string) => true
}

interface IPerson {
    name: string;
    email: string;
    sayMyName: () => void;
}

class Person implements IPerson{
    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    sayMyName(){
        console.log(`Say my name, ${this.name}`)
    }
}

const person = new Person("Gabriel", "gabriel@gabriel.com")
person.sayMyName()