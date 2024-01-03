import React from "react";
import "./contentwrapper.scss";

const ContentWrapper = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
