import React from "react";
import ReactPlayer from "react-player";
import "./style.css";
function Trailer({ url }) {
  const renderPlayer = () => {
    if (url !== null && url) {
      return (
        <ReactPlayer
          className="trailer"
          width="100%"
          height="400px"
          url={url}
        />
      );
    }
  };
  return <>{renderPlayer()}</>;
}

export default Trailer;
