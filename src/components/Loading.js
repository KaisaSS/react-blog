import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader">
      <Loader type="Hearts" color="#267de0" />
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
