import React from "react";
import ReactPlayer from "react-player/youtube";

import "./videopopup.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`video-popup ${show ? "visible" : ""}`}>
      <div className="opacity-layer" onClick={hidePopup}></div>
      <div className="video-player">
        <span className="close-btn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
