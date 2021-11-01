import React from "react";
import "./Vid.css";

const Vid = ({ src, photographer, url, link, file }) => {
  return (
    <div className="vid-block">
      <video controls>
        <source className="vid" src={file} type="video/mp4" />
      </video>
      {/* <div className="vid-info">
        <div className="vid-inner">
          <p>Video by</p>
          <a href={link} target="-blank" rel="noopener noreferrer">
            {photographer}
          </a>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Vid;
