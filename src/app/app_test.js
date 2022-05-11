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
  console.log(books);
  console.log(books.length);
  //   return [];
  reviews = require("./dataset/reviews.json");
  console.log(reviews);
  console.log(reviews.length);
  // let tab = new BookWithReviews(books.id, books.title);
  // tab.addReview(reviews.author, reviews.content);
  // console.log(tab);
  let tab = [];
  for (i = 0; i < books.length; i++) {
    // console.log(new BookWithReviews(books[i].id, books[i].title));
    tab[i] = new BookWithReviews(books[i].id, books[i].title);
  }
  console.log(tab);
  // return tab;
  console.log(tab.length);
  console.log(tab[2].id);
  console.log(tab[2][reviews]);
  for (j = 0; j < reviews.length; j++) {
    if (tab[j].id == reviews[j].bookId) {
      tab[j].reviews.addReview(reviews[j].author, reviews[j].content);
    }
  }
  console.log(tab);
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
