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

// async function retriveData()

async function parseBooksData(books, reviews) {
  //   books = require("./dataset/books.json");
  //   reviews = require("./dataset/reviews.json");
  books = await fetch("./dataset/books.json");
  const rebooks = await books.json();

  reviews = await fetch("./dataset/reviews.json");
  const rereviews = await reviews.json();
  //   return books
  rebooks
    .map((book) => {
      return new BookWithReviews(book.id, book.title);
    })
    .map((bookWithReviews) => {
      rereviews
        .filter((review) => {
          return bookWithReviews.id === review.bookId;
        })
        .forEach((result) => {
          bookWithReviews.addReview(result.author, result.content);
        });
      console.log(bookWithReviews);

      return bookWithReviews;
    });
  //   console.log(books);
}
// parseBooksData();
/* Displays data from passed `books` array. For example, if books argument would have following value:
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
 * */
async function displayBooks(parentNode, books) {
  // TODO: Implement
  parentNode = document.createElement("ol");
  books = await parseBooksData();
  books.map((book) => {
    // parentNode = document.createElement("ol");
    const titleli = document.createElement("li");
    const title = document.createElement("span");
    title.textContent = book.title;
    titleli.appendChild(title);
    parentNode.appendChild(titleli);

    // const title = document.createElement("span");
    const reviewul = document.createElement("ul");
    if (books.reviews && book.reviews.length > 0) {
      books.reviews.map((review) => {
        const bookli = document.createElement("li");
        bookli.textContent = `${review.reviews.author} ${review.reviews.content}`;
        reviewul.appendChild(bookli);
      });
    } else {
      const bookli = document.createElement("li");
      bookli.textContent = "";
      reviewul.appendChild(bookli);
    }
    titleli.appendChild(reviewul);
    body.appendChild(parentNode);
  });
}
displayBooks();

// async function fetchAndAppend() {
//   const sortedBooks = parseBooksData();
//   for (const [id, review] of Object.entries(sortedBooks)) {
//     const booksDiv = displayBooks(id, review);
//     body.appendChild(booksDiv);
//   }
// }
