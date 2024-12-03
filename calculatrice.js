"use strict";
// ceci est une calculatrice faite en typeScript, conjoitement avec tailwindcss
// selection des éléments d'affichage
let displayCharacter = document.querySelector('#displayCharacter');
let displayResult = document.querySelector('#displayResult');
let buttons = document.querySelectorAll('.bouton');
// let deleteCharButton = document.querySelector('#deleteChar');
// let deleteAllButton = document.querySelector('#deleteAll');
// let resultbutton = document.querySelector('#result');
function ajouterCaractère(character) {
    return displayCharacter.innerHTML += character;
}
function result() {
    try {
        let sans_espace = displayCharacter.textContent.replace(/\s+/g, "")
        let resultOper = eval(sans_espace)
    }
    catch (_a) {
        displayResult.textContent = "Error";
    }
}
function deleteCharacter() {
    return displayCharacter.textContent = displayCharacter.textContent.slice(0, -1);
}
function deleteAll() {
    return displayCharacter.textContent = '', displayResult.textContent = '';
}
