import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

function formatQueryParams(params){
  const queryItems = Object.keys(params).map(key => `${encodeURI(key)}=${encodeURIComponent(params[key])}`)
  const queryJoined = queryItems.join('&');
  return queryJoined;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: [],
      searchTerm: '',
      printType: 'all',
      bookType:'partial'
    };
  }

  setSearchTerm = (search) => {
    this.setState({
      searchTerm: search,
    });
  };

  setPrintType = (selection) => {
    console.log('printype ran');
    this.setState({
      printType: selection
    });
  }

  setBookType = (selection) => {
    this.setState({
      bookType: selection
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    const APIkey = 'AIzaSyC9prUiAf010wAgNktLeiG8dhmD1m2K-cQ';
    const printType = this.state.printType;
    const bookType = this.state.bookType;
    const baseUrl =
      'https://www.googleapis.com/books/v1/volumes?';
    const params = {
      apikey: APIkey,
      q: searchTerm,
      printType: printType,
      filter: bookType
    };
    const queryString = formatQueryParams(params);
    const url = baseUrl + queryString;


    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again.');
        }
        return response;
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          bookResults: responseJson.items,
          error: null,
        });
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
          updateSearchTerm={search => this.setSearchTerm(search)}
          updatePrintType={selection => this.setPrintType(selection)}
          updateBookType={selection => this.setBookType(selection)}
          onSubmit={(event) => this.handleSubmit(event)}
        />
        <BookList bookResults={this.state.bookResults} />
      </main>
    );
  }
}

export default App;
