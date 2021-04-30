import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import { APIkey } from './APIconfig';
import BookList from './BookList/BookList';

class App extends React.Component {
  state = {
    bookResults: [],
    searchTerm: '',
    printType: '',
    bookType: ' ',
  };

  setSearchTerm = (search) => {
    this.setState({
      searchTerm: search,
    });
  };

  setPrintType = (selection) => {
    this.setState({
      printType: selection,
    });
  };

  setBookType = (selection) => {
    this.setState({
      bookType: selection,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleDataFetch();
  };

  handleDataFetch = () => {
    const { searchTerm, printType, bookType } = this.state;
    const baseUrl = `https://www.googleapis.com/books/v1/volumes/?apiKey=${APIkey}&q=${searchTerm}&printType=${
      printType === '' ? 'all' : printType
    }${bookType === ' ' ? '' : `&filter=${bookType}`}`;
    console.log(baseUrl);
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again.');
        }
        return response;
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            bookResults: responseJson.items,
            error: null,
          },
          console.log(responseJson.items)
        );
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    return (
      <main className="App">
        <div className="header">
          <h1>Google Book Search</h1>
        </div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          printType={this.state.printType}
          bookType={this.state.bookType}
          updateSearchTerm={(search) => this.setSearchTerm(search)}
          updatePrintType={(selection) => this.setPrintType(selection)}
          updateBookType={(selection) => this.setBookType(selection)}
          onSubmit={(event) => this.handleSubmit(event)}
          searchStarted={this.state.searchStarted}
        />
        <BookList bookResults={this.state.bookResults} />
      </main>
    );
  }
  static defaultProps = {
    bookResults: [],
    searchTerm: '',
    printType: '',
    bookType:''
  };
}

export default App;
