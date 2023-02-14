const form = document.getElementById('form');
const tableList = document.querySelector('.table-list');

let books = [];

class Books{
  constructor(id, title, author){
    this.id = id;
    this.title = title;
    this.author = author;
  }

//  Add book

  addBook() {
  const {id,title,author} = this;
  const bookList = new Books(id, title, author)

  if (title === '' || author === '') {
    errorMessage('Kindly fill all inputs');
  }
  else {
    books.push(bookList);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
}

  function displayBooks(id, title, author) {
  const items = document.createElement('li');
  items.innerHTML = `
    <h2>Title: ${title}
     <h2>By: ${author}</h2>
     `;
  const removeBtn = document.createElement('button');
  const bookLine = document.createElement('hr');
  removeBtn.textContent = 'Remove';
  removeBtn.id = id;
  items.append(removeBtn, bookLine);

  // remove book
  removeBtn.addEventListener('click', () => {
    books = books.filter((book) => {
      if (book.id === id) {
        return false;
      }
      return true;
    });
    localStorage.setItem('books', JSON.stringify(books));
    items.remove();
  });
  tableList.appendChild(items);
}

// Error message
  function errorMessage(message) {
  document.querySelector('.error').textContent = message;
  setTimeout(() => {
    document.querySelector('.error').textContent = '';
  }, 4000);
}


// displayBooks(bookList.id, bookList.title, bookList.author);

// Global variable to check local storage

const myBook = JSON.parse(localStorage.getItem('books'));
if (myBook) {
  books = myBook;
}
books.forEach((book) => {
  displayBooks(book.id, book.title, book.author);
});

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now();
    const b = new Books(id, title, author);
    b.addBook();
    if(title && author){
      displayBooks(b.id, b.title, b.author)
    }
    // clear input
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  });
});
