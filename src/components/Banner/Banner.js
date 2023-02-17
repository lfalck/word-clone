import React from "react";

function Banner({ bannerType, children }) {
  return <div className={`banner ${bannerType}`}>{children}</div>;
}

export default Banner;
