import React from "react";
import "./musicList.css";

const ListItem = ({ itemData }) => {
  const { id, imgURL, name } = itemData;

  return (
    <li id={id} className="music-list-item">
      <span className="img-container">
        <img className="item-img" src={imgURL} alt="" height="50" width="50" />
      </span>
      <h3 className="item-name">{name}</h3>
    </li>
  );
};

const MusicList = (props) => {
  const { listData, listLabel } = props;

  return (
    <div className="music-list-container">
      <h2>{listLabel}</h2>
      <ul className="music-list">
        {listData &&
          listData.map((item) => {
            return <ListItem key={item.id} itemData={item} />;
          })}
      </ul>
    </div>
  );
};

export default MusicList;
