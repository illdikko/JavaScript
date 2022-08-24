alert(`Bienvenue sur votre calculateur de revenu et de pension. Nous allons vous aider à calculer la totalité de votre revenu mensuel. Vous pourrez ainsi savoir quel est votre pourcentage de cotisation pour votre pension. Munissez vous des documents nécessaires, et clickez sur "OK".`);
let salaire;
let prime200 = 200;
let prime400 = 400
let chomage = 500;
let pension;
let cotisation;
let total;
let type_contrat = prompt(`Quel est votre type de contrat? (Temps plein = TP, mi-temps=MT ou interim=IT)`);
if(type_contrat) type_contrat = type_contrat.toUpperCase();
if (type_contrat != "TP" && type_contrat != "MT" && type_contrat != "IT") {
    alert(`Vous n'êtes pas éligibles pour notre service.`);
}
else {


    switch (type_contrat) {
        case "TP":
            salaire = parseInt(prompt(`Quel est votre salaire mensuel arrondi à l'entier le plus proche?`), 10);
            if (isNaN(salaire)) {
                alert(`Veuillez entrer votre salaire, en chiffre, sans quoi nous ne pourrons vous aider dans votre calcul.`);
            }
            else { total = salaire }


            break;
        case "MT":
            salaire = parseInt(prompt(`Quel est votre salaire mensuel arrondi à l'entier le plus proche?`), 10);
            if (isNaN(salaire)) {
                alert(`Veuillez entrer votre salaire, en chiffre, sans quoi nous ne pourrons vous aider dans votre calcul.`);
            }
            else if (salaire < 1400) {
                total = salaire + prime200 + chomage;
            }
            else {
                total = salaire + chomage
            }
            break;
        case "IT":
            salaire = parseInt(prompt(`Quel est votre salaire mensuel arrondi à l'entier le plus proche?`), 10);
            if (isNaN(salaire)) {
                alert(`Veuillez entrer votre salaire, en chiffre, sans quoi nous ne pourrons vous aider dans votre calcul.`);
            }
            else if (salaire < 1400) {
                total = salaire + prime400;
            }
            else {
                total = salaire + prime200
            }
            break;
        default:
            alert(`Le type de contrat renseigné n'est pas valide. Veuillez recommencer s'il vous plait.`);
            break;

    }

    //Un switch n'est pas correct ici, car il n'y a pas de stricte comparaisons. If...else if... else est plus pertinent.

    // switch (total) {
    //     case total <= 800:
    //         pension = 15;
    //         cotisation = total * pension/100;
    //         break;
    //     case total > 800 && total <= 1200:
    //         pension = 25;
    //         cotisation = total * pension/100;
    //         break;
    //     case total > 1200 && total <= 1500:
    //         pension = 30;
    //         cotisation = total * pension/100
    //         break;
    //         case total> 1500:
    //         pension = 32
    //         cotisation = total * pension/100

    //         break;
    // }

    if (total < 800) {
        pension = 15;
        cotisation = total * pension / 100;
    }
    else if (total >= 800 && total < 1200) {
        pension = 25;
        cotisation = total * pension / 100;
    }
    else if (total >= 1200 && total < 1500) {
        pension = 30;
        cotisation = total * pension / 100
    }
    else {
        pension = 32
        cotisation = total * pension / 100
    }

    alert(`Pour un ${type_contrat} de ${salaire}€, toutes primes et bonus ajoutés, total : ${total}€ - Palier de cotisation = ${pension}% - Montant de la cotisation : ${cotisation}`);
    // Pouyr faire un message personnalisé en fonction de la présence ou non de bonus et de prime, il est pertinent d'utiliser un switch.

}
