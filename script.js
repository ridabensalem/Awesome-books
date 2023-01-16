const buttonAdd = document.querySelector('#add');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookDisplay = document.querySelector('#display');

const books = JSON.parse(localStorage.getItem('books')) || [];

const addBook = (title, author) => {
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render();
};

const removeBook = (index) => {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render();
};

const render = () => {
  bookDisplay.innerHTML = '';
  books.forEach((book, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
            ${book.title}<br>
            ${book.author}<br>
            <button class="remove-button" data-index="${index}">Remove</button>
            <br><br>
            <hr>
        `;
    bookDisplay.appendChild(div);
  });

  document.querySelectorAll('.remove-button').forEach((button) => {
    button.addEventListener('click', () => {
      removeBook(button.getAttribute('data-index'));
    });
  });
};

render();

buttonAdd.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  addBook(title, author);
  bookTitle.value = '';
  bookAuthor.value = '';
});
