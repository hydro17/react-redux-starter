import React from 'react';

const VideoList = (props) => {
  return (
    <ul className='list-group col-md-4'>
      {props.videos.map((video, index) => <li className='list-group-item' key={index}>{video.snippet.title}</li>)}
    </ul>
  );
}

export default VideoList;
