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
