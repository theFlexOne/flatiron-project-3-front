import React from "react";
import "./musicList.css";

const ListItem = ({ itemData }) => {
  const { id, img_url, name } = itemData;

  return (
    <li id={id} className="music-list-item">
      <span className="img-container">
        <img className="item-img" src={img_url} alt="" height="50" width="50" />
      </span>
      <h3 className="item-name">{name}</h3>
    </li>
  );
};

const MusicList = (props) => {
  const { data, label } = props;

  console.log(`data!`, data);

  return (
    <>
      <h2>{label}</h2>
      <ul className="music-list">
        {data &&
          data.map((item) => {
            return <ListItem key={item.id} itemData={item} />;
          })}
      </ul>
    </>
  );
};

export default MusicList;
