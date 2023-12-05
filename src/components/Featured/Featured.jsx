import React from "react";
import "./featured.scss";
import { PlayArrow, Info } from "@mui/icons-material";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://bloganchoi.com/wp-content/uploads/2022/11/anh-dai-dien.jpeg"
        alt="banner img"
      />
      <div className="info">
        <img src="../../../img/lnp.png" alt="img-desc" />
        <span className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          tempore culpa? A alias tempore voluptates placeat sit ab distinctio,
          magni et quis incidunt dolor exercitationem totam harum id obcaecati.
          Corporis!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <Info />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
