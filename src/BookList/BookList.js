import React from 'react';
import Book from '../Book/Book';

class BookList extends React.Component {
  render() {
    const bookItem = this.props.bookResults.map((book, i) =>
      <Book
      title={book.volumeInfo.title}
      //author={book.volumeInfo.authors[0]}
      description={book.volumeInfo.description}
      //image={book.volumeInfo.imageLinks.thumbnail}
      link={book.volumeInfo.infoLink}
      key={i}/>
    );
    return <div>{bookItem}</div>;
  }
}

BookList.defaultProps = {
    bookResults: [],
  };


export default BookList;
