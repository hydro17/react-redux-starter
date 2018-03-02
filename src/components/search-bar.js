// import React from 'react';
// const Component = require('react').Component;
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // return <input onChange={this.handleInputChange} />;
    return <input onChange={e => console.log(e.target.value)} />;
  }

  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
