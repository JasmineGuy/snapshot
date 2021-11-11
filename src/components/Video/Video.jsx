import React, { useState, useEffect } from "react";
import Vid from "../Vid/Vid";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import "./Video.css";
import * as Icon from "react-feather";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState();
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isSearch, setIsSearch] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    axios
      .get("https://api.pexels.com/videos/popular?page=1&per_page=10", {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setVideos(res.data.videos);
        setTotalPages(Math.ceil(res.data.total_results / 10));
        setPending(false);
      });
  }, []);

  const handleChange = (string) => {
    setUserInput(string);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPending(true);
    setCurrentPage(1);
    setIsSearch(true);

    axios
      .get(
        `https://api.pexels.com/videos/search/?page=1&query=${userInput}&per_page=10`,
        {
          method: "GET",
          credentials: "same-origin",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((res) => {
        setVideos(res.data.videos);
        setTotalPages(Math.ceil(res.data.total_results / 10));
        setPending(false);
      });
  };

  const handlePagination = (direction) => {
    setPending(true);
    const pageFetch = direction === "next" ? currentPage + 1 : currentPage - 1;

    const getCall = `https://api.pexels.com/videos/popular?page=${pageFetch}&per_page=10`;
    const searchCall = `https://api.pexels.com/videos/search/?page=${pageFetch}&query=${userInput}&per_page=10`;

    const apiCall = isSearch ? searchCall : getCall;

    axios
      .get(`${apiCall}`, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setVideos(res.data);
        setTotalPages(Math.ceil(res.data.total_results / 10));
        setPending(false);
      });

    setCurrentPage(pageFetch);
  };

  console.log("videos:", videos);

  return (
    <div className="video">
      <form onSubmit={handleSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <Icon.Search />
        </button>
      </form>

      {pending || !videos || !videos.length ? (
        <Spinner />
      ) : (
        <div className="image-holder">
          {videos.map((video, index) => (
            <Vid
              key={index}
              src={video.image}
              url={video.user.url}
              photographer={video.user.name}
              link={video.user.url}
              file={video.video_files.link}
            />
          ))}
        </div>
      )}
      <div className="pagination-container">
        <Button
          text={"Prev"}
          isDisabled={currentPage === 1 || pending}
          handleClick={handlePagination}
        />
        <div>
          {currentPage && totalPages
            ? `Page ${currentPage} of ${totalPages}`
            : null}
        </div>
        <Button
          text={"Next"}
          isDisabled={pending || currentPage === totalPages}
          handleClick={handlePagination}
        />
      </div>
    </div>
  );
};

export default Video;
