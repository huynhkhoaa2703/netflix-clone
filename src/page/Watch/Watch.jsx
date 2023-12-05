import React from "react";
import "./watch.scss";
import { ArrowBack } from "@mui/icons-material";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="../../../vid/lnp.mp4"
      />
    </div>
  );
};

export default Watch;
