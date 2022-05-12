const bookTitle = title => {
  const el = document.createElement('span')
  el.innerHTML = title
  return el
}

const bookReviews = reviews => {
  if (reviews && reviews.length > 0) {
    const el = document.createElement('ul')
    reviews.forEach(review => {
      const _reviewEl = document.createElement('li')
      _reviewEl.innerHTML = `${review.content} by ${review.author}`
      el.appendChild(_reviewEl)
    })
    return el
  }
  return null
}

export const parseBooksData = (books, reviews) => books.map(book => ({
  ...book,
  reviews: reviews.filter(review => review.bookId === book.id)
}))

export const displayBooks = (parentNode, books) => {
  if (books && books.length > 0) {
    const list = document.createElement('ol')
    books.forEach(book => {
      const bookHtml = document.createElement('li')
      const titleEl = bookTitle(book.title)
      const reviewsEl = bookReviews(book.reviews)
      bookHtml.appendChild(titleEl)
      if (reviewsEl) {
        bookHtml.appendChild(reviewsEl)
      }
      list.appendChild(bookHtml)
    })
    parentNode.appendChild(list)
  }
  return parentNode
}
