const html_tr = document.querySelector("#panier tbody "); //# pour selectionner un élément par son ID. Espace pour viser un enfant de cet élément.
const html_prix1 = document.querySelectorAll("#prix_chaise");
const html_prix2 = document.querySelector("#prix_table");
const html_prix3 = document.querySelector("#prix_meubleTV");
const html_chaise= document.querySelector("#chaise");
const html_table= document.querySelector("#table");
const html_meubleTV= document.querySelector("#meubleTV");

// const html_name = document.querySelector("#produits tbody tr:first-child")
// const html_price = document.querySelector("#produits tbody tr:nthchild(2)")

const ajouter = function() {

    let html_td = document.createElement('td');//pour ajouter des cases l'une en dessous de l'autre, tr pour rajouter des rows, td pour rajouter une case.
    // let td1 = document.querySelector("#panier td:first-child")
    // td1.innerHTML = `titi` //this.html_name
    // let td2 = document.querySelector("#panier td:last-child")
    // td2.innerHTML = `toto`//this.html_price
    html_td.innerText = `titi`;
    html_tr.append(html_td);

}

// Check démo prof pour la correction : j'étais pas DU TOUT partie dans la bonne direction.
