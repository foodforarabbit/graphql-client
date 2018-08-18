import React, { Component } from 'react';
import Authors from '../../components/Authors';
import {
  debounce,
} from 'lodash';
class AuthorsPage extends Component {
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
          <a style={{padding: '0px 8px', cursor: 'pointer', fontWeight: orderBy === 'firstName' ? 'bold' : 'normal'}}onClick={this.handleSort('firstName')}>firstName</a>
          <a style={{padding: '0px 8px', cursor: 'pointer', fontWeight: orderBy === 'lastName' ? 'bold' : 'normal'}}onClick={this.handleSort('lastName')}>lastName</a>
        </p>
        <Authors name={search} orderBy={orderBy} asc={asc} />
      </div>
    );
  }
}

export default AuthorsPage;