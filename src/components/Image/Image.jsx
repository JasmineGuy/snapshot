import React from "react";
import "./Image.css";

const Image = ({ src, photographer, url, link }) => {
  return (
    <div className="image-block">
      <img alt="curated" className="image" src={src} />
      <div className="photo-info">
        <div className="photo-inner">
          <p>Photo by</p>
          <a href={link} target="-blank" rel="noopener noreferrer">
            {photographer}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
