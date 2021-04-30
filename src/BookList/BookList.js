import React from 'react';
import Book from '../Book/Book';

class BookList extends React.Component {
  render() {
    const bookItem = this.props.bookResults.map((book, i) =>
      <Book
      title={book.volumeInfo.title}
      //author={`${book.volumeInfo.authors.length === 0 ? ' ' : book.volumeInfo.authors[0]}`}
      description={book.volumeInfo.description}
      link={book.volumeInfo.infoLink}
      image={book.volumeInfo.imageLinks.smallThumbnail}
      key={i}/>
    );
    return <div>{bookItem}</div>;
  }
}

BookList.defaultProps = {
    bookResults: [],
  };


export default BookList;
