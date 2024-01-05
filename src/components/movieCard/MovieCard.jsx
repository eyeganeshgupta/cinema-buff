import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./moviecard.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state?.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url?.poster + data.poster_path
    : PosterFallback;
};

export default MovieCard;
