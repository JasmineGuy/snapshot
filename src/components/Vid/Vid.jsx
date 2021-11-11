import React from "react";
import "./Vid.css";
import ReactPlayer from "react-player";

const Vid = ({ src, photographer, url, link, file }) => {
  return (
    <div className="vid-block">
      <img alt="curated" className="vid" src={src} />
      <div className="vid-info">
        <div className="vid-inner">
          <p>Video by</p>
          <a href={link} target="-blank" rel="noopener noreferrer">
            {photographer}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vid;
