class BookWithReviews {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.reviews = [];
  }

  addReview(author, content) {
    this.reviews.push({ author, content });
  }
}
// import { BookWithReviews } from "./model";
/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {Array} - an array of BookWithReviews objects
 */
function parseBooksData(books, reviews) {
  // TODO: Implement
  books = require("./dataset/books.json");

  reviews = require("./dataset/reviews.json");
  return books
    .map((book) => {
      return new BookWithReviews(book.id, book.title);
    })
    .map((bookWithReviews) => {
      reviews
        .filter((review) => bookWithReviews.id === review.bookId)
        .forEach((filteredBooks) => {
          bookWithReviews.addReview(
            filteredBooks.author,
            filteredBooks.content
          );
        });
      console.log(bookWithReviews);
      return bookWithReviews;
    });
  // console.log(books);
}

parseBooksData();
/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param books - an array of BookWithReviews objects.
 */
// export function displayBooks(parentNode, books) {
//   // TODO: Implement
// }
// function displayBooks(parentNode, books) {
//   // TODO: Implement
//   // const booksList = document.createElement('ol')
//   parentNode = document.createElement("ol");
//   const book = document.createElement("li");
//   book.textContent = books.title;
//   parentNode.appendChild(book);

//   // const title = document.createElement("span");
//   const reviewul = document.createElement("ul");
//   books.forEach((review) => {
//     const bookli = document.createElement("li");
//     bookli.textContent = review.reviews.author + review.reviews.content;
//     reviewul.appendChild(bookli);
//   });
// }

function x() {
  const books = [
    {
      title: "x",
      reviews: [
        {
          title: "aaa",
          content: "bbb",
        },
        {
          title: "aaa",
          content: "bbb",
        },
      ],
    },
  ];
  return `<ol>
  ${books.map((book) => {
    const reviews =
      book.reviews && book.reviews.length > 0
        ? `<ul>${book.reviews.map((review) => `<li>${review.title}</li>`)}</ul>`
        : "";

    return `<li><span>${book.title}</span>${reviews}</li>`;
  })}</ol>`;
}

function displayBooks(parentNode, books) {
  books = parseBooksData();
  parentNode = document.createElement("ol");
}
