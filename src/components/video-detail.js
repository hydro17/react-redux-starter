import React from 'react';

const VideoDetail = ({ video }) => {

  function isEmpty(obj) {
    for (let prop in obj)
      if (obj.hasOwnProperty(prop)) return false;
    return true;
  }

  if (!video || isEmpty(video)) {
    return <div>Loading...</div>
  }

  // Object.prototype.isEmpty1 = function () {
  //   for (let prop in this)
  //     if (this.hasOwnProperty(prop)) return false;
  //   return true;
  // }

  // if (video.isEmpty1()) {
  //   return <div>Loading...</div>
  // }

  // if (isEmpty(video)) return <div>Loading...</div>;

  // if (Object.keys(video).length === 0) {
  //   return <div>Loading...</div>
  // }

  console.log("VideoDetail: ");
  console.log(video);
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        {/* <iframe className='embed-responsive-item' src={url}></iframe> */}
        <img src='./img/CMS_Creative_164657191_Kingfisher.jpg' />
      </div>

      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
