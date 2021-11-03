import React from "react";
import "./Vid.css";
import ReactPlayer from "react-player";

const Vid = ({ src, photographer, url, link, file }) => {
  return (
    <div className="vid-block">
      {/* <ReactPlayer playing className="react-player" url={src} /> */}
      {/* <video controls>
        <source className="vid" src={file} type="video/mp4" />
      </video> */}
      <div className="vid-info">
        <div className="vid-inner">
          <img src={src} />
          <p>Video by</p>
          <a href={url} target="-blank" rel="noopener noreferrer">
            {photographer}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vid;
