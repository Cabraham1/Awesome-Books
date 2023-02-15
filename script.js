// const form = document.getElementById('form');
// let books = JSON.parse(localStorage.getItem('books'));

// // Error message
// function errorMessage(message) {
//   document.querySelector('.error').textContent = message;
//   setTimeout(() => {
//     document.querySelector('.error').textContent = '';
//   }, 4000);
// }

// class Book {
//   constructor(title, author, id) {
//     this.title = title;
//     this.author = author;
//     this.id = id;
//   }

//   addBook() {
//     const { title, author, id } = this;
//     const bookList = { title, author, id };
//     books = JSON.parse(localStorage.getItem('books'));
//     if (title === '' || author === '') {
//       errorMessage('Kindly fill all inputs');
//     } else if (books !== null) {
//       books.push(bookList);
//       localStorage.setItem('books', JSON.stringify(books));
//       books = JSON.parse(localStorage.getItem('books'));
//     } else {
//       books = [];
//       books.push(bookList);
//       localStorage.setItem('books', JSON.stringify(books));
//       books = JSON.parse(localStorage.getItem('books'));
//     }
//   }

//   remove() {
//     const { id } = this;
//     books = books.filter((book) => {
//       if (book.id === id) {
//         return false;
//       }
//       return true;
//     });

//     localStorage.setItem('books', JSON.stringify(books));
//   }
// }

// // Function for displaying books
// function displayBooks(title, author, id) {
//   const bookList = document.querySelector('.book-list');
//   const items = document.createElement('li');
//   items.innerHTML += `
//   <div class="title-div"><h2><q>${title}</q></h2>
//   <h2> by </h2>
//   <h2> ${author}</h2></div>
//     `;
//   const removeBtn = document.createElement('button');
//   removeBtn.textContent = 'Remove';
//   removeBtn.className = 'removeBtn';
//   items.appendChild(removeBtn);
//   bookList.appendChild(items);

//   removeBtn.addEventListener('click', () => {
//     const book = new Book(title, author, id);
//     id = removeBtn.id;
//     book.remove();
//     items.remove();
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const id = Date.now();
//     const book = new Book(title, author, id);
//     book.addBook();
//     if (title && author) {
//       displayBooks(book.title, book.author, book.id);
//     }
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//   });
// });

// // Appending book to empty object
// if (books !== null) {
//   books.forEach((book) => {
//     displayBooks(book.title, book.author, book.id);
//   });
// }

// Date function
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];
const getDate = new Date();
var month = getDate.getMonth();
var day = getDate.getDay();
var year = getDate.getFullYear()
var time = getDate.getHours();
var minutes = getDate.getMinutes();
var seconds = getDate.getSeconds();
var date = `${months[month-1]} ${day}th ${year}, ${time}:${minutes}:${seconds}`;
document.querySelector('.date').innerHTML = date;

// creating a SPA 
var pages = {
  'list' : `<section id="book-lists">
  <div class="section-one">
    <h1>All awesome books</h1>
  </div>
  
  <div class="table-part">
    <ul class="book-list">
    </ul>
  </div>
  </section>`,

  'addNew' : `<div class="form-section" id="add">
  <h2>Add a new book</h2>
  <form id="form">

    <input type="text" name="title" id="title" class="input" placeholder="Title"> <br> <br>
    <p class="error"></p>
    <input type="text" name="author" id="author" class="input" placeholder="Author"> <br> <br>
    <button type="submit" class="btn">Add</button>
  </form>
</div>`,

  'contact' : `<div class="contact-section">
  <h1>Contact information</h1>
  <p>Do you have any questions or you just want to say "Hello"? <br>&nbsp;You can reach out to us! </p>
  <ul>
    <li>Our email: person@example.com</li>
    <li>Our Phone-number: 0123456789</li>
    <li>Our address: Streetname 22, 84503 City, Country</li>
  </ul>
</div>`
}

function getPageContent(page){
  var contentToReturn;

  switch(page){

    case 'list' :
      contentToReturn = pages.list;
      break;
    case 'addNew' :
      contentToReturn = pages.addNew;
      break;
    case 'contact' :
      contentToReturn = pages.contact;
      break; 
    default:
      contentToReturn = pages.list;
      break;
  }

  document.querySelector('.content').innerHTML =
    contentToReturn;
}
