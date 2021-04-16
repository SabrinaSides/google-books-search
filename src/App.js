import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookResults: []
    }
  }

  componentDidMount(){
    const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&printType=books&maxResults=20&key=AIzaSyC9prUiAf010wAgNktLeiG8dhmD1m2K-cQ';
    //parameters(q, printType, filter)

    fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error('Something went wrong, please try again.')
      }
      return response;
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        bookResults: responseJson.items,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message,
      });
    });
  }

  render(){
  return (
    <main className='App'>
       <div className='header'>
        <h1>Google Book Search</h1>
      </div>
      <SearchForm />
      <BookList 
      bookResults={this.state.bookResults}/>
    </main>
  );
  }
}

export default App;
