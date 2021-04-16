import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    render(){
        return(
            <form className='searchBar' onSubmit={this.props.onSubmit}>
                <label htmlFor='searchbar'>Search:</label>
                <input 
                type='text' 
                id='searchbar' 
                className='searchInput' 
                value={this.props.searchTerm}
                onChange={e => this.props.updateSearchTerm(e.target.value)}
                required/>
                <input type='submit' value='Search' />
            </form>
        )
    }
}

export default SearchBar;