export default class Books {
  constructor() {
    this.booksList = [];
  }

  #SetBooksList = (books) => {
    localStorage.setItem('Books', JSON.stringify(books));
  };

  #getBooksList = () => {
    const books = JSON.parse(localStorage.getItem('Books'));
    if (books) {
      return books;
    }
    return [];
  };

  newCollection = (bookValues) => {
    this.booksList = this.#getBooksList();
    this.booksList.push(bookValues);
    this.#SetBooksList(this.booksList);
    document.querySelector('#add-new-book').style.display = 'none';
    document.querySelector('#show-books').style.display = 'flex';
  };

  showBooks = () => {
    const books = this.#getBooksList();
    const htmlbooks = document.querySelector('.books');
    htmlbooks.innerHTML = '';
    for (let i = 0; i < books.length; i += 1) {
      const wrapper = document.createElement('div');
      const info = document.createElement('p');
      const button = document.createElement('button');
      htmlbooks.appendChild(wrapper);
      wrapper.append(info);
      wrapper.appendChild(button);

      info.textContent = `${books[i].title} authored by  ${books[i].autor}`;
      button.textContent = 'remove';
      button.addEventListener('click', this.deleteButton.bind(this));
      button.setAttribute('data', i);
    }
  };

  deleteButton = (evt) => {
    const allBooks = this.#getBooksList();
    allBooks.splice(evt.currentTarget.getAttribute('data'), 1);
    this.showBooks(allBooks);
    this.#SetBooksList(allBooks);
  }
}
