// ceci est une calculatrice faite en typeScript, conjoitement avec tailwindcss
// selection des éléments d'affichage
let information_orientation= document.querySelector('#information_orientation');
let displayCharacter = document.querySelector('#displayCharacter');
let displayResult = document.querySelector('#displayResult');
let buttons = document.querySelectorAll('.bouton');
// let deleteCharButton = document.querySelector('#deleteChar');
// let deleteAllButton = document.querySelector('#deleteAll');
// let resultbutton = document.querySelector('#result');

window.addEventListener("orientationchange", () => {
    if (window.orientation === 90 || window.orientation === -90) {
     information_orientation.style.display='block';
body.style.backgroundColor = "black";
    }
});

function ajouterCaractère(character) {
    return displayCharacter.innerHTML += character;
}
function result() {
    try {
        let charWithSp = displayCharacter.textContent.replace(/\s+/g, '');
        let resultOper = eval(charWithSp);
        return displayResult.textContent = resultOper;
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
