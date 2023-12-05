import React, { useState } from "react";
import "./listitem.scss";
import {
  Add,
  PlayArrow,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from "@mui/icons-material";

const ListItem = ({ index }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="list-item"
      style={{ left: isHover && index * 325 - 25 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src="https://pic5.iqiyipic.com/image/20220810/f3/aa/v_168764715_m_601_zh-CN_284_160.webp"
        alt="banner-film"
      />
      {isHover && (
        <>
          <video src="../../../vid/lnp.mp4" autoPlay={true} loop muted />
          <div className="item-info">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpOffAlt />
              <ThumbDownOffAlt />
            </div>
            <div className="item-info__top">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quia illo totam quaerat doloremque, impedit quod tempore? Iure,
              doloremque sint! Quas perferendis porro ipsum inventore, corporis
              aperiam modi aliquam quisquam.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
