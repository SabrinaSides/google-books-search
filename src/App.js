import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

function formatQueryParams(params){
  const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  const queryJoined = queryItems.join('&');
  return queryJoined;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: [],
      searchTerm: '',
      printType: '',
      bookType:''
    };
  }

  setSearchTerm = (search) => {
    this.setState({
      searchTerm: search,
    });
  };

  setPrintType = (selection) => {
    this.setState({
      printType: selection,
    })
    this.handleDataFetch();
  }

  setBookType = (selection) => {
    this.setState({
      bookType: selection
    })
    this.handleDataFetch();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleDataFetch();
  };

  handleDataFetch = () => {
    const { searchTerm, printType, bookType } = this.state;
    const APIkey = 'AIzaSyC9prUiAf010wAgNktLeiG8dhmD1m2K-cQ';
    console.log('this is the url for booktype' + bookType);
    const baseUrl =
      `https://www.googleapis.com/books/v1/volumes/?apiKey=${APIkey}&q=${searchTerm}&printType=${printType === '' ? 'all' : printType}&filter=${bookType === '' ? 'partial' : bookType}`;
    const params = {
      apikey: APIkey,
      q: searchTerm,
      //printType: printType,
      //filter: bookType
    };
    //const queryString = formatQueryParams(params);
    //const url = baseUrl + queryString;


    fetch(baseUrl)
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
        }, console.log(responseJson));
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

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
    static defaultProps = {
      bookResults: [],
      searchTerm: '',
      printType: 'all',
      bookType:'partial'
  }
}


export default App;
