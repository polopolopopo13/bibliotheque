"use strict";

//create an unique id for each book
var reference = 0;

//will contain list of books available
var ul_listing = document.getElementById("list-of-books");
//text area test
var book_listing = document.getElementById("allBiblio");
book_listing.textContent = "Books listing\n\n";


//bibliotheque objet
class Bibliotheque{
	constructor(gender) {
		this.gender = gender;
		this.books = new Array();
		this.length = 0;
	};

	refreshHtml(book){
		book_listing.textContent += (book.title + " de " + book.author + '\n');
		ul_listing.innerHTML+="<li>" + book.title +"</li>";
	};

	addBook(title,author){
		var book = new Livre(title, author, this.length);
		this.books.push(book);
		this.refreshHtml(book);
		this.length+=1;
	};

	sortBooks(sort_by){
		ul_listing.innerHTML="";
		book_listing.textContent="";
		if(sort_by=="0"){
			this.books.sort((a, b) => (a.author > b.author) ? 1 : -1);
		}
		else if(sort_by=="1"){
			this.books.sort((a, b) => (a.title > b.title) ? 1 : -1)
		}
		else if(sort_by=="2"){
			this.books.sort((a, b) => (a.reference > b.reference) ? 1 : -1)
		}
		this.books.forEach(book => this.refreshHtml(book));
	}
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
var list_livres = new Array({"title":"Dessiner un mouton", "author":"E. St. Berger"}, {"title": "Marche à l'ombre","author": "Sauron"}, {"title": "Mille et une pattes","author": "Freudon"});
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
btn_sorter.forEach(radio => radio.addEventListener('change', () => Bibliotheque1.sortBooks(radio.value)));