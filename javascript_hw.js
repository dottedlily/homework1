function getBooksByAuthor(books, author) {
    let iterator = books.values();
    for (let value of iterator) {
        if(value.author == author){
        console.log(value);
    }
}}


function countAvailableBooks(books) {
  let count_books = 0;
  let iterator = books.values();
  for(let value of iterator){
      if(value.isAvailable == true){
          count_books += 1;
      }
  }
  console.log(count_books);
}



function lendBook(books, title) {
  let iterator = books.values();
  for(let value of iterator){
      if(value.title == title){
          if(value.isAvailable == true){
               value.isAvailable = false;
               console.log(`The book ${title} has been successfully lent!`);
               
          }else{
              console.log(`The book ${title} is not available!`);
          }
  }
}}

const books = [
    { title: "War and Peace", author: "Leo Tolstoy", isAvailable: true },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", isAvailable: false },
    { title: "The Master and Margarita", author: "Mikhail Bulgakov", isAvailable: true },
    { title: "The Idiot", author: "Fyodor Dostoevsky", isAvailable: false }
];

getBooksByAuthor(books, "Fyodor Dostoevsky")
countAvailableBooks(books)
lendBook(books, "War and Peace")
