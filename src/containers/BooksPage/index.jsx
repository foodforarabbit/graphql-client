import React, { Component } from 'react';
import Books from '../../components/Books';
import {
  debounce,
} from 'lodash';
class BooksPage extends Component {
  state = {
    searchInput: '',
    search: '',
    orderBy: 'id',
    asc: true,
  }

  handleSearch = (e) => {
    const value = e.target.value;
    this.setState({searchInput: value});
    this.searchDebounced(value);
  }

  searchDebounced = debounce(
    (value) => this.setState({search: value}),
    200,
  );

  handleSort = (sortVal) => () => {
    const {
      orderBy,
      asc,
    } = this.state;
    if(orderBy === sortVal){
      this.setState({
        asc: !asc,
      })
    } else {
      this.setState({
        orderBy: sortVal,
        asc: false,
      })
    }
  }

  render() {
    const {
      search,
      searchInput,
      orderBy,
      asc,
    } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearch}
          value={searchInput}
        />
        <p>
          filter: {searchInput}
        </p>
        <p>
          orderBy {asc ? '↑' : '↓'}:
          <a style={{padding: '0px 8px', cursor: 'pointer', fontWeight: orderBy === 'id' ? 'bold' : 'normal'}}onClick={this.handleSort('id')}>id</a>
          <a style={{padding: '0px 8px', cursor: 'pointer', fontWeight: orderBy === 'title' ? 'bold' : 'normal'}}onClick={this.handleSort('title')}>title</a>
          <a style={{padding: '0px 8px', cursor: 'pointer', fontWeight: orderBy === 'votes' ? 'bold' : 'normal'}}onClick={this.handleSort('votes')}>votes</a>
        </p>
        <Books title={search} orderBy={orderBy} asc={asc} />
      </div>
    );
  }
}

export default BooksPage;