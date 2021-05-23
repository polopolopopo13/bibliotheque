"use strict";

//will contain list of books available
var ul_listing = document.getElementById("list-of-books");
//text area test
var book_listing = document.getElementById("allBiblio");
book_listing.textContent = "Books listing\n\n";


//bibliotheque objet
class Bibliotheque{
	constructor(gender) {
		this.gender = gender;
		this.books = [];
		this.length = 0;//is also the books reference
	};

	refreshHtml(book){
		book_listing.textContent += (book.title + " de " + book.author + '\n');
		ul_listing.innerHTML+="<li>" + book.title +"</li>";
	};

	addBook(title, author){
		var book = new Livre(caseEngineering(title), author, this.length);
		this.books.push(book);
		this.refreshHtml(book);
		this.length+=1;
	};

	sortBooks(sort_by){
		ul_listing.innerHTML="";
		book_listing.textContent="";
		switch(sort_by){
			case "0" : this.books.sort((a, b) => (a.author > b.author) ? 1 : -1); 
				break;
			case "1" : this.books=triDicho(this.books, "title"); 
				break;
			case "2" : this.books.sort((a, b) => (a.reference > b.reference) ? 1 : -1); 
				break;
		}
		this.books.forEach(book => this.refreshHtml(book));
	}
}

function caseEngineering(string){
	return string[0].toUpperCase() + string.slice(1);
}


function triDicho(liste_, sorter){
	var len = liste_.length;
	for(let i=1; i<len; i++){
		var elem = liste_[i];
		var j = i-1
		
		while(j>=0 && elem[sorter]<liste_[j][sorter]){
			liste_[j+1] = liste_[j]
			j = j-1;
		}
		liste_[j+1]=elem;
	}
	return liste_;
}


var Bibliotheque1 = new Bibliotheque();

//book object
class Livre {
	constructor(title, author, reference) {
	  this.title = title;
	  this.author = author;
	  this.reference = reference;
	};
}

//ADDING books from DataBase
var list_livres = new Array({"title":"Dessiner un mouton", "author":"E. St. Berger"}, {"title": "Marche à l'ombre","author": "Sauron"}, {"title": "Mille et une pattes","author": "Freudon"}, {"title": "A chercher","author": "Alew"});
list_livres.forEach(book => {
	Bibliotheque1.addBook(book.title, book.author);
});


//ADD BOOK TO BIBLIOTHEQUE VIA FORMULAR
var btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click", addToLibrary);

function addToLibrary(){
	var title_input = document.getElementById("title").value;
	var author_input = document.getElementById("author").value;
	Bibliotheque1.addBook(title_input, author_input);
}


// SORTING BIBLIOTHEQUE
var btn_sorter = document.querySelectorAll('input[type=radio][name="sorter"]');
btn_sorter.forEach(radio => radio.addEventListener('change', () => (console.log(Bibliotheque1.books),
Bibliotheque1.sortBooks(radio.value))));


// POURQUOI LE SORTING S'EFFECTUE SUR LE ADD VIA DATABASE ET ENSUITE
// SUR LE ADD PAR FORMULAR ET NON PAS LES 2 ENSEMBLE
// A CAUSE DU CASE SENSITIVE : z<A !!!!