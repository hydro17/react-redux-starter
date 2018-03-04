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

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        // videos: videos,
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleOnVideoSearch(term1) {
    YTSearch({ key: API_KEY, term: term1 }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className='container'>
        {/* <SearchBar onVideoSearch={this.handleSearchVideos.bind(this)} /><br /> */}
        <SearchBar onVideoSearch={this.handleOnVideoSearch.bind(this)} /><br />
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
