class Livre {
	constructor(titre, auteur, reference) {
	  this.titre = titre;
	  this.auteur = auteur;
	  this.reference = reference;
	}
  }
var reference = 0;
var list_livres = new Array({"titre":"Dessiner un mouton", "auteur":"E. St. Berger"});
var n_livres = list_livres.length;

var bibliotheque = new Array();

for(i=0; i<= n_livres-1; i++){
	bibliotheque.push(new Livre(list_livres[i].titre, list_livres[i].auteur, reference+1))

}

console.log(bibliotheque);