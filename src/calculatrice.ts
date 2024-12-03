// ceci est une calculatrice faite en typeScript, conjoitement avec tailwindcss

// selection des éléments d'affichage

let displayCharacter:any = document.querySelector('#displayCharacter');
let displayResult:any = document.querySelector('#displayResult');
let buttons:any = document.querySelectorAll('.bouton');
// let deleteCharButton = document.querySelector('#deleteChar');
// let deleteAllButton = document.querySelector('#deleteAll');
// let resultbutton = document.querySelector('#result');

function ajouterCaractère(character:string){ 
    return displayCharacter.innerHTML += character;
}


function result():void{
    try {
        let resultOper = eval(displayCharacter.textContent);
        displayResult.textContent = resultOper
    } catch {
        displayResult.textContent = "Error"
    }
}

function deleteCharacter():string{
        return displayCharacter.textContent = displayCharacter.textContent.slice(0, -1); 
}
function deleteAll():string{
    return displayCharacter.textContent ='', displayResult.textContent = '';
}

