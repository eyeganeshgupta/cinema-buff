import React from "react";
import "./pagenotfound.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <ContentWrapper>
        <span className="big-text">404</span>
        <span className="small-text">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
