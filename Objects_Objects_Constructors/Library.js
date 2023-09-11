const myLibrary = []

function Book(author, title, numPages, isReaded) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isReaded = isReaded; 
}

addBookToLibrary = function(book) {
  myLibrary.push(book)
  console.log('add book successfull')
}

Book.prototype.printBook =  function() {
  console.log(`Title: ${this.title}, author: ${this.author}, num pages: ${this.numPages}, is readed: ${this.isReaded}`);
}

Book.prototype.readBook = function() {
  this.isReaded = true;
}

function printAllBook() {
  myLibrary.forEach(element => {
    element.printBook()
  });
}

// const book1 = new Book('Tác giả 1', 'Sách 1', 200, false);
// const book2 = new Book('Tác giả 2', 'Sách 2', 300, true);
// addBookToLibrary(book1);
// addBookToLibrary(book2);

// book1.readBook();
// printAllBook();