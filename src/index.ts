console.log("Bonjour KJ")

let a:string = "Declaration explicite avec TYpeScirpt type : string";
let b:number = 34
let c:any;
let d:null;
let e:undefined;
let f:boolean;

// type union
// let age:number | boolean
// age = 18
// age = age>=18
// console.log(age)

// type enums
// enum JourDeLaSemaine  {
//     monday,
//     tuesday,
//     wednesday = "Mercredi",
//     thirsday = "Jeudi",
//     friday = "Vendredi",
//     saturday = "Samedi",
//     sunday = "Dimanche",
// }
// console.log(JourDeLaSemaine[1])

// tuples
// const tableau: [string, number, string] = ["Bonjour", 1000, "fois"];
// console.log(tableau[0], tableau[1], tableau[2])

// interfaces et type alias


// interface
interface NomAGe{
    noms : string[], //obligatoire
    ages?: number[], // optionnelle
}

const nomAge1:NomAGe = {
    noms : ["Bienvenu", "Bienfait"],
}
console.log(nomAge1)

// type alias

type NomAgeNouveau = NomAGe

type monNumber = number;
const age:monNumber = 19;

type NombrePairInferieurAdix = 2|4|6|8
const deux:NombrePairInferieurAdix = 2


console.log(typeof age)