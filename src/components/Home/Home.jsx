import React, { useState, useEffect } from "react";
import Image from "../Image/Image";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import "./Home.css";
import * as Icon from "react-feather";
import axios from "axios";

const Home = () => {
  const [photos, setPhotos] = useState();
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    axios
      .get("https://api.pexels.com/v1/curated?page=1&per_page=10", {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setPhotos(res.data.photos);
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
        `https://api.pexels.com/v1/search/?page=1&query=${userInput}&per_page=10`,
        {
          method: "GET",
          credentials: "same-origin",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((res) => {
        setPhotos(res.data.photos);
        setPending(false);
      });
  };

  const handlePagination = (direction) => {
    setPending(true);
    const pageFetch = direction === "next" ? currentPage + 1 : currentPage - 1;

    const getCall = `https://api.pexels.com/v1/curated?page=${pageFetch}&per_page=10`;
    const searchCall = `https://api.pexels.com/v1/search/?page=${pageFetch}&query=${userInput}&per_page=10`;

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
        setPhotos(res.data.photos);
        setPending(false);
      });

    setCurrentPage(pageFetch);
  };

  return (
    <div className="home">
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

      {pending || !photos || !photos.length ? (
        <Spinner />
      ) : (
        <div className="image-holder">
          {photos.map((photo, index) => (
            <Image
              key={index}
              src={photo.src.original}
              url={photo.url}
              photographer={photo.photographer}
              link={photo.photographer_url}
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
        <Button
          text={"Next"}
          isDisabled={pending}
          handleClick={handlePagination}
        />
      </div>
    </div>
  );
};

export default Home;
