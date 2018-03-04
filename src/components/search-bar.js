// import React from 'react';
// const Component = require('react').Component;
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting value' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
          onKeyDown={e => {
            // if (e.which === 13) this.props.searchVideos(this.state.term);
            if (e.key === 'Enter') this.props.searchVideos(this.state.term);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
