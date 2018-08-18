import React, { Component } from 'react';
import Author from '../../components/Author';
class AuthorPage extends Component {

  render() {
    const {
      match: {
        params: {
          id,
        }
      },
    } = this.props;

    return (
      <div>
        <Author id={parseInt(id)} />
      </div>
    );
  }
}

export default AuthorPage;