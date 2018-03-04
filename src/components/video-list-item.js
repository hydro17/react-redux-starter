import React from 'react';

// const VideoListItem = ({ video }) => {
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  // function handleOnClickVideoSelect() {
  //   onVideoSelect(video);
  // }

  return (
    // <li className='list-group-item' onClick={handleOnClickVideoSelect} >
    <li className='list-group-item' onClick={() => onVideoSelect(video)} >
      <div className='media'>
        <div className='media-left'>
          <img src={imageUrl} />
        </div>
        <div className='media-body'>
          {video.snippet.title}
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;