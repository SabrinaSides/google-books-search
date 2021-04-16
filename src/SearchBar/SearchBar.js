import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    render(){
        return(
            <form className='searchBar'>
                <label htmlFor='searchbar'>Search:</label>
                <input type='text' id='searchbar' className='searchInput'/>
                <input type='submit' value='Search' />
            </form>
        )
    }
}

export default SearchBar;