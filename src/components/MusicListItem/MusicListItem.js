import React from "react";
import "./musicListItem.css";

const MusicListItem = (props) => {
  const { data, onRecordClick } = props;

  console.log(`data`, data);

  const handleClick = () => {
    onRecordClick(data.id);
  };

  return (
    <li id={data.id} className="music-list-item" onClick={handleClick}>
      <img src={data.imgURL} alt="" />
      <h5>{data.recordName}</h5>
    </li>
  );
};

export default MusicListItem;
