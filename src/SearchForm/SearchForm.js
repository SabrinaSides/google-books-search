import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';

class SearchForm extends React.Component{
    render(){
        return(
            <div>
                <SearchBar />
                <Filters />
            </div>
        )
    }
}

export default SearchForm;