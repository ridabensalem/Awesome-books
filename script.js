// get the current date
const dateTimeDiv = document.getElementById('DateTime');
const date = new Date();
const dateString = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
const timeString = date.toLocaleTimeString('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
});
const dateTime = `${dateString} , ${timeString}`;
dateTimeDiv.innerHTML = dateTime;
// Manipulating classes for navigation
const addBookLink = document.getElementById('new_book_link');
const listBookLink = document.getElementById('list_link');
const contactBookLink = document.getElementById('contact_link');
const addBookDiv = document.getElementById('wrapper');
const bookListDiv = document.getElementById('list_container');
const contactDiv = document.getElementById('contact_container');
listBookLink.addEventListener('click', () => {
  addBookDiv.style.display = 'none';
  bookListDiv.style.display = 'block';
  contactDiv.style.display = 'none';
});
addBookLink.addEventListener('click', () => {
  addBookDiv.style.display = 'flex';
  bookListDiv.style.display = 'none';
  contactDiv.style.display = 'none';
});
contactBookLink.addEventListener('click', () => {
  addBookDiv.style.display = 'none';
  bookListDiv.style.display = 'none';
  contactDiv.style.display = 'flex';
});

class Book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookTitle = document.querySelector('#title');
    this.bookAuthor = document.querySelector('#author');
    this.bookDisplay = document.querySelector('#display');
    this.buttonAdd = document.querySelector('#add');
    this.render();
  }

  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.render();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.render();
  }

  render() {
    this.bookDisplay.innerHTML = '';
    this.bookDisplay.classList.add('book_container');
    if (this.books.length === 0) {
      this.bookDisplay.classList.remove('book_container');
    }
    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
       &nbsp ${book.title} &nbsp By 
                ${book.author}
                <button class="remove-button" data-index="${index}">Remove</button>
                <br><br>
            `;
      if (index % 2 === 0) {
        div.style.background = '#dddddd';
      } else {
        div.style.background = '#fff';
      }

      this.bookDisplay.appendChild(div);
      div.classList.add('book_list_container');
    });

    document.querySelectorAll('.remove-button').forEach((button) => {
      button.addEventListener('click', () => {
        this.removeBook(button.getAttribute('data-index'));
      });
    });
  }
}

const book = new Book();

book.buttonAdd.addEventListener('click', () => {
  const title = book.bookTitle.value;
  const author = book.bookAuthor.value;
  book.addBook(title, author);
  book.bookTitle.value = '';
  book.bookAuthor.value = '';
});
