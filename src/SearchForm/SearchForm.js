import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.props.SearchTerm}
          updateSearchTerm={this.props.updateSearchTerm}
          onSubmit={this.props.onSubmit}
        />
        <Filters
          printType={this.props.printType}
          bookType={this.props.bookType}
          updatePrintType={this.props.updatePrintType}
          updateBookType={this.props.updateBookType}
        />
      </div>
    );
  }
}

export default SearchForm;
