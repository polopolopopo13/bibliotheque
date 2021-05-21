"use strict";

var reference = 0;

class Livre {
	constructor(title, author, reference) {
	  this.title = title;
	  this.author = author;
	  this.reference = reference;
	}
  }

var list_livres = new Array({"title":"Dessiner un mouton", "author":"E. St. Berger"}, {"title": "Marche à l'ombre","author": "Sauron"}, {"title": "Mille et une pattes","author": "Freudon"});
var n_livres = list_livres.length;
var bibliotheque = new Array();
var ul_listing = document.getElementById("list-of-books");

list_livres.forEach(book=>{
	ul_listing.innerHTML+="<li>" + book.title +"</li>";});

var btn_register = document.getElementById("btn_register");
var book_listing = document.getElementById("allBiblio");
book_listing.textContent = "Books listing\n\n";

//ADD PREVIOUS LIST TO BIBLIOTHEQUE
for(let i=0; i<= n_livres-1; i++){
	let author = list_livres[i].author;
	let title = list_livres[i].title;

	bibliotheque.push(new Livre(title, author, reference+1))
	reference ++;
	book_listing.textContent += (title + " de " + author + '\n');

}

//ADD BOOK TO BIBLIOTHEQUE VIA FORMULAR

btn_register.addEventListener("click", addToLibrary);
function addToLibrary(){
	var title_input = document.getElementById("title").value;
	var author_input = document.getElementById("author").value;
	var book = new Livre(title_input, author_input);
	bibliotheque.push(book);
	reference+=1;

	book_listing.textContent += (title_input + " de " + author_input + '\n');
	actualiseLibrary(book);
}

// SORTING BIBLIOTHEQUE

var btn_sorter = document.querySelectorAll('input[type=radio][name="sorter"]');
btn_sorter.forEach(radio => radio.addEventListener('change', () => listSort(radio.value)));

function listSort(sort_by){
	console.log(sort_by);
	if(sort_by=="0"){
		bibliotheque.sort((a, b) => (a.author > b.author) ? 1 : -1);
	}
	else if(sort_by=="1"){
		bibliotheque.sort((a, b) => (a.title > b.title) ? 1 : -1)
	}
	console.log(bibliotheque)
}

// MAKE HTML FOR EACH BOOK and add to div list
function actualiseLibrary(book){
	ul_listing.innerHTML+="<li>" + book.title +"</li>";
};