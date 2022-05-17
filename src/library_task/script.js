/* eslint-disable no-param-reassign */
const addButton = document.querySelector('.add');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal_add_book');
const search = document.getElementById('search');
const titles = document.querySelectorAll('.book_title');
const authors = document.querySelectorAll('.book_author');
const book = Array.from(document.querySelectorAll('.book'));

addButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

search.addEventListener('input', (event) => {
  titles.forEach((item) => {
    const title = item.innerHTML.toLowerCase();
    const searching = event.target.value.toLowerCase();
    authors.forEach((itemA) => {
      const author = itemA.innerHTML.toLowerCase();
      if (author.includes(searching)) {
        itemA.parentElement.style.display = 'flex';
      } else if (title.includes(searching)) {
        item.parentElement.style.display = 'flex';
      } else {
        item.parentElement.style.display = 'none';
      }
    });
  });
});

const bookRatingItem = Array.from(document.querySelectorAll('.book_rating_item'));

bookRatingItem.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.dataset.all = item.dataset.value;
  });
});

const mostPopular = document.querySelector('.most_popular');
const bookRating = Array.from(document.querySelectorAll('.book_rating'));

mostPopular.addEventListener('click', () => {
  bookRating.forEach((item) => {
    if (item.dataset.all !== '5') item.parentElement.style.display = 'none';
  });
});

const allBooks = document.querySelector('.all_books');

allBooks.addEventListener('click', () => {
  book.forEach((item) => {
    item.style.display = 'flex';
  });
});
