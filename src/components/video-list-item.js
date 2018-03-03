import React from 'react';

const VideoListItem = (props) => {
  return <li className='list-group-item'>{props.video.snippet.title}</li>;
}

export default VideoListItem;