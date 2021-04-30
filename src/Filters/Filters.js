import React from 'react';
import './Filters.css';

function Filters(props){
    return (
      <form className="filters" onSubmit={props.onSubmit}>
        <label htmlFor="printType">Print Type:</label>
        <select id="printType" className="dropdown" value={props.printType} onChange={e => props.updatePrintType(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <label htmlFor="bookType">eBook Type:</label>
        <select id="bookType" className="dropdown" value={props.bookType} onChange={e => props.updateBookType(e.target.value)}>
          <option value=' ' defaultValue hidden>Select:</option>
          <option value="ebooks">eBooks (Paid and Free)</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>

        </select>
        <input type="submit" value="Filter" />
      </form>
    );
}

export default Filters;
