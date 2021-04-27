import React from 'react';
import './Filters.css';

class Filters extends React.Component {
  render() {
    return (
      <form className="filters">
        <label htmlFor="printType">Print Type:</label>
        <select id="printType" className="dropdown" value={this.props.printType} onChange={e => this.props.updatePrintType(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <label htmlFor="bookType">Book Type:</label>
        <select id="bookType" className="dropdown" /*value={this.props.bookType}*/ onChange={e => this.props.updateBookType(e.target.value)}>
          <option value="">No Filter</option>
          <option value="ebooks">eBooks (Paid and Free)</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>

        </select>
      </form>
    );
  }
}

export default Filters;
