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
        videos: videos,
        selectedVideo: videos[2]
      });
      // console.log('Selected:');
      console.log(videos[1]);
      console.log(this.state.videos[1]);
      console.log(this.state.selectedVideo);
    });
    // YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
    //   this.setState({
    //     videos: videos
    //   });
    // });
  }

  render() {
    return (
      <div className='container'>
        <SearchBar /><br />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 
