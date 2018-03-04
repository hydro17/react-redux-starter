import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyDqejb164mXGK-igUstESqPUxVsMKHBcmU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: {}
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className='container'>
        {/* <SearchBar onSearchTermChange={this.videoSearch.bind(this)} /><br /> */}
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} /><br />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container1')); 
