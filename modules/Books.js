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

  deleteCollection = (bookIndex) => {
    let bookRemoved;
    if (bookIndex !== null) {
      const books = this.#getBooksList();
      bookRemoved = books.filter((_item, key) => {
        if (key === parseInt(bookIndex, 10)) {
          return null;
        }
        return true;
      });
      this.#SetBooksList(bookRemoved);
      this.showBooks();
    }
    
  };

  showBooks = () => {
    const books = this.#getBooksList();
    const htmlbooks = document.querySelector('.books');
    htmlbooks.innerHTML = '';
    for (let i = 0; i < books.length; i += 1) {
      htmlbooks.innerHTML += `
          <div class='book'>
          <h3>'${books[i].title}'</h3>
          <p><span class='by-span'> By </span> ${books[i].autor}</p>
          <button type='button' data-index='${i}' class='removebtn'>Remove</button>
          `;
    }
  };
}
