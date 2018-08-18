import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import BooksPage from './containers/BooksPage';
import BookPage from './containers/BookPage';
import AuthorsPage from './containers/AuthorsPage';
import AuthorPage from './containers/AuthorPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/authors">Authors</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={HomePage}/>
          <Route path="/books" component={BooksPage}/>
          <Route path="/book/:id" component={BookPage}/>
          <Route path="/authors" component={AuthorsPage}/>
          <Route path="/author/:id" component={AuthorPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
