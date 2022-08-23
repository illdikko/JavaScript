// alert(`Bienvenue chez Market!`);
// //il est possible de créer des "objets" en JS :

// let article = {
//     name:prompt(`Quel est l'article souhaité?`),
//     prix_unit : parseFloat(prompt(`Quel est le prix unitaire hors TVA?`))
// }

// //let article = prompt(`Quel est l'article souhaité?`);
// //let prix_unit = parseFloat(prompt(`Quel est le prix unitaire hors TVA?`));
// let quantite = parseInt(prompt(`Quelle est la quantité désirée?`));
// let prix_HT = quantite*article.prix_unit
// let taxe = prix_HT*0.21;
// let prix_TTC = prix_HT + taxe;

// alert(`Pour ${quantite} ${article.name}, au prix unitaire hors taxe de ${article.prix_unit}€,veuillez régler la somme totale de ${prix_TTC.toFixed(2)}€ (prix HT ${prix_HT.toFixed(2)}€).`)

//Rajout de conditions pour controler les variables:

alert(`Bienvenue chez Market!`);
let article = prompt(`Quel est l'article souhaité?`);
if (article == null || article == "") {
    alert("Veuillez entrer le nom de l'article s'il vous plait.")
}
else { // Le else ici n'est pas obligatoire
    let prix_unit = parseFloat(prompt(`Quel est le prix unitaire hors TVA?`));
    if (isNaN(prix_unit)) {
        alert("Veuillez entrer un prix s'il vous plait.")
    }
    else {
        let quantite = parseInt(prompt(`Quelle est la quantité désirée?`));
        if (isNaN(quantite)) {
            alert("Veuillez entrer une quantité s'il vous plait.")
        }
        else {
            let prix_HT = quantite * article.prix_unit
            let taxe = prix_HT * 0.21;
            let prix_TTC = prix_HT + taxe;

            alert(`Pour ${quantite} ${article}, au prix unitaire hors taxe de ${prix_unit}€,veuillez régler la somme totale de ${prix_TTC.toFixed(2)}€ (prix HT ${prix_HT.toFixed(2)}€).`)
        }
    }
}