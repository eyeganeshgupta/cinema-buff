import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <div className="carousel-selection">
      <ContentWrapper>
        <span className="carousel-title">{title}</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={mediaType} />
    </div>
  );
};

export default Similar;
