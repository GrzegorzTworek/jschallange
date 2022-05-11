// class BookWithReviews {
//   constructor(id, title) {
//     this.id = id;
//     this.title = title;
//     this.reviews = [];
//   }

//   addReview(author, content) {
//     this.reviews.push({ author, content });
//   }
// }
// import { BookWithReviews } from "model.js";
import { BookWithReviews } from "./model.js";
// import { books } from "./dataset/books.json";
// import { reviews } from "./dataset/reviews.json";
// import pkg from "./model.js";
// const { BookWithReviews } = pkg;
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
  // console.log(books)
}
// const books = require("./dataset/books.json");

// const reviews = require("./dataset/reviews.json");
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
