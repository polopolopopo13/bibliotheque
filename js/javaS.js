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

var btn_register = document.getElementById("btn_register");
var book_listing = document.getElementById("allBiblio");
book_listing.textContent = "Books listing\n\n";

for(let i=0; i<= n_livres-1; i++){
	let author = list_livres[i].auteur;
	let title = list_livres[i].titre;

	bibliotheque.push(new Livre(title, author, reference+1))
	reference ++;
	book_listing.textContent += (title + " de " + author + '\n');

}

btn_register.addEventListener("click", addToLibrary);
function addToLibrary(){
	var title_input = document.getElementById("title").value;
	var author_input = document.getElementById("author").value;
	
	bibliotheque.push(new Livre(title_input, author_input));
	reference+=1;

	book_listing.textContent += (title_input + " de " + author_input + '\n');
	console.log(bibliotheque)
}