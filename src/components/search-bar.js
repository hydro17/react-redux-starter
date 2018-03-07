// import React from 'react';
// const Component = require('react').Component;
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        // onKeyDown={e => {
        //   // if (e.which === 13) this.props.onVideoSearch(this.state.term);
        //   if (e.key === 'Enter') this.props.onSearchTermChange(this.state.term);
        // }}
        />
      </div>
    );
  }
}

export default SearchBar;
