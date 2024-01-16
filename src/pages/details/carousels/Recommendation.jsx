import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  if (data?.results?.length === 0) {
    return null;
  }

  return (
    <div className="carousel-selection">
      <ContentWrapper>
        <span className="carousel-title">Recommendations</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={mediaType} />
    </div>
  );
};

export default Recommendation;
