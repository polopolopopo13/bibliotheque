"use strict";

var reference = 0;

class Livre {
	constructor(titre, auteur, reference) {
	  this.titre = titre;
	  this.auteur = auteur;
	  this.reference = reference;
	}
  }

var list_livres = new Array({"titre":"Dessiner un mouton", "auteur":"E. St. Berger"}, {"titre": "Marche à l'ombre","auteur": "Sauron"}, {"titre": "Mille et une pattes","auteur": "Freudon"});
var n_livres = list_livres.length;

var bibliotheque = new Array();

for(let i=0; i<= n_livres-1; i++){
	bibliotheque.push(new Livre(list_livres[i].titre, list_livres[i].auteur, reference+1))
	reference ++;
}

var btn_register = document.getElementById("btn_register");

btn_register.addEventListener("click", addToLibrary);
function addToLibrary(){
	var title_input = document.getElementById("title").value;
	var author_input = document.getElementById("author").value;
	
	bibliotheque.push(new Livre(title_input, author_input));
	reference+=1;

	console.log(bibliotheque)
}