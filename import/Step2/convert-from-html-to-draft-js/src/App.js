import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { book } = this.props
    return (
      <div>
        {JSON.stringify(book)}
      </div>
    );
  }
}

export default App;
