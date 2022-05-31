import Nav from "../../modules/Nav.js";
import Books from "../../modules/Books.js";
import { DateTime } from '../../node_modules/luxon/src/luxon.js';


const awesomeBooks = new Books();
const form = document.querySelector('#add-book');
const navMenu = document.querySelectorAll('.navBtn');
console.log(navMenu)

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

const remove = (index) => {
  awesomeBooks.deleteCollection(index);
};

navMenu.forEach((nav) => {
  nav.addEventListener('click', () => {
    console.log('click')
    Nav (nav.getAttribute('id'));
  });
});

remove(-1);
awesomeBooks.showBooks();

const removeButton = document.querySelectorAll('button.removebtn');

removeButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    remove(btn.dataset.index);
  });
});
const twoDigits = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};

setInterval(() => {
  const now = DateTime.now();
  const showDate = `${now.toLocaleString(DateTime.DATE_FULL)} ${
    now.hour
  }:${twoDigits(now.minute)}:${twoDigits(now.second)} hrs.`;
  document.querySelector('.showDate').innerHTML = showDate;
}, 1000);


