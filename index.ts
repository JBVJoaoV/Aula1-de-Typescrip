//pra começar npm init -y, npm install --save-dev t, tsc --init
// depois cria index.ts na raiz

// ele interpreta a variavel para definir o valor, mas vc pode forçar com :
let firstName: string | number | boolean = "João"
console.log(firstName)
firstName = 10
console.log(firstName)
firstName = true
console.log(firstName)

let firstName1 = "Pedro"
// da erro firstName1 = 1, pq ele entende que só pode string
console.log(firstName1)

// duas formas de fazer função, podendo ou não declarar o tipo do retorno, mas dar preferencia por declarar
function isEven(numero?: number){
    // como o numero é opcional, verifica se foi realmente digitado um numero antes de fazer a conta
    if(!numero){
        return false;
    }
    return numero % 2 === 0;
}

const isEvenArrow = (numero : number): boolean => {
    return numero % 2 === 0;
}

console.log(isEven())

//fazendo lista 
let fruits = ["Banana", "Apple"]
let fruits1: string[] = ["Banana", "Apple"]
let fruits2: Array<string> = ["Banana", "Apple"]

//fazendo tupla, tem que declarar tudo certo, se não associa a lista
let tuplas: [string, string] = ["Item1", "Item2"]

function formatValue(value: string | number){
    if(typeof value === "string"){
        console.log(value.toLowerCase())
    }
    if(typeof value === "number"){
        console.log(value.toFixed(2))
    }
}

formatValue("UMA string QualQueR")
formatValue(1.654)

//outras formas de lista, mas com mais de um tipo de elemento
let fruits3: (string | number) [] = ["Banana", "Apple", 10]
let fruis4: Array<string | number> = ["Banana", 10]

//só pode criar um
type User = {
    name: string;
    email: string;
    //com o ? pode ser nulo ou numero
    age?: number;
    // já tem valores predefinidos do que pode ser 
    profile: "admin" | "manager" | "regular";
}

// com interface pode criar mais de um, pode dar problema preferir type
interface User1 {
    name: string;
}

interface User1 {
    email: string;
}

let user: User = {
    name: "Pedro",
    email: "fds",
    // não precisei declarar age pois era opcional
    profile: "admin"
}


//criando classe 
class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    sayMyName(){
        console.log(`Say my name, ${this.name}`)
    }
}

const person = new Person ("Vieira")
person.sayMyName()




//sempre que for pra rodar, colocar no terminal npx tsc, e depois node index.js