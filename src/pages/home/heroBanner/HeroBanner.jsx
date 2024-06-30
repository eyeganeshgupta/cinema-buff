import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import useFetch from "../../../hooks/useFetch";
import "./herobanner.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { loading, data } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bG =
      url?.backDrop +
      data?.results[Math.floor(Math.random() * data?.results?.length - 1)]
        ?.backdrop_path;
    setBackground(bG);
  }, [data]);

  const searchQueryHandler = (synEvent) => {
    if (synEvent.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const onClickHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero-banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="hero-banner-content">
          <span className="title">Welcome</span>
          <span className="sub-title">
            Your gateway to the world of cinema – Explore, discover, and immerse
            yourself in the magic of cinema.
          </span>
          <div className="search-input">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for movie or tv show..."
              onChange={(synEvent) => {
                setQuery(synEvent.target.value);
              }}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={onClickHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
