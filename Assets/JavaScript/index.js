import Nav from '../../modules/Nav.js';
import Books from '../../modules/Books.js';
import { DateTime } from '../../modules/luxton.js';

const awesomeBooks = new Books();
const form = document.querySelector('#add-book');
const navMenu = document.querySelectorAll('.navBtn');
const date = document.querySelector('.date');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector('#title');
  const bookAutor = document.querySelector('#autor');

  if (bookTitle.value.trim() !== '' && bookAutor.value.trim() !== '') {
    const bookValues = {
      autor: bookAutor.value,
      title: bookTitle.value,
    };
    awesomeBooks.newCollection(bookValues);
    awesomeBooks.showBooks();
    bookTitle.value = '';
    bookAutor.value = '';
  }
});

navMenu.forEach((nav) => {
  nav.addEventListener('click', () => {
    Nav(nav.getAttribute('id'));
  });
});

let getDate = DateTime.now();
date.innerHTML = `${getDate.monthLong} ${getDate.day} ${getDate.year}, ${getDate.hour}:${getDate.minute}:${getDate.second}`;
// Update the date every second
const updateDate = () => {
  getDate = DateTime.now();
  date.innerHTML = `${getDate.monthLong} ${getDate.day} ${getDate.year}, ${getDate.hour}:${getDate.minute}:${getDate.second}`;
};
setInterval(updateDate, 1000);