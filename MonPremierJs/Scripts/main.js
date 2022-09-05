// alert(`Bienvenue dans mon premier cours de JavaScript`);

// let prenom = prompt(`Quel est votre prénom?`);
// let animal = confirm(`Êtes vous une personne à chat?`)

// if(animal){alert(`Yaaay bienvenue au club!`)}
// else{alert(`C'est si banal...`)}

const html_prenom = document.getElementById("prenom");
const html_animal_chat = document.getElementById("animalChat");
const html_animal_chien = document.getElementById("animalChien");
const html_animal_autre = document.getElementById("animalAutre");

const saveInfo = function ()
// la constante saveInfo est égale à une fonction non nommée.
{
    if (!html_prenom.value) throw new Error(`Manque information : prénom`);
    if (!html_animal_chat.checked && !html_animal_chien.checked && !html_animal_autre.checked) throw new Error(`Manque information : animal`);
    let prenom = html_prenom.value;
    let animal;
    if (html_animal_chat.checked) animal = html_animal_chat.value;
    else if (html_animal_chien.checked) animal = html_animal_chien.value;
    else animal = html_animal_autre.value;
    alert(getInfo(prenom, animal))
}

const getInfo = function (prenom, animal) {
    if (typeof (prenom) != 'string') throw new TypeError(`Prenom is not a string`);
    if (typeof (animal) != 'string') throw new TypeError('Animal is not a string')
    let message = `Bonjour ${prenom} `
    switch (animal) {
        case "Chat":

            message += " , ton animal préféré est le chat!"
            break;
        case "Chien":

            message += " , ton animal préféré est le chien!"
            break;
        case "Autre":

            message += " , ton animal préféré n'est ni le chien, ni le chat!"
            break;
    }
    return message
}
