import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';

function SearchForm(props){
    return (
      <div>
        <SearchBar
          searchTerm={props.SearchTerm}
          updateSearchTerm={props.updateSearchTerm}
          onSubmit={props.onSubmit}
        />
        <Filters
          printType={props.printType}
          bookType={props.bookType}
          updatePrintType={props.updatePrintType}
          updateBookType={props.updateBookType}
          onSubmit={props.onSubmit}
        />
      </div>
    );
  }

export default SearchForm;
