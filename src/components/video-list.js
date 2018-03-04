import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map(video =>
    <VideoListItem key={video.etag} video={video} />)

  return (
    <ul className='list-group col-md-4'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
