import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  return (
    <ul className='list-group'>
      {props.videos.map((video, index) => <VideoListItem video={video} />)}
    </ul>
  );
}

export default VideoList;
