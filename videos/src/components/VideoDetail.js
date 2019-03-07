import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>;
  }
ß
  return <div>{video.snippet.title}</div>
};

export default VideoDetail;