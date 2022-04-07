import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./musicList.css";
import unavailable from "../../assets/No_Image_Available.jpg";
import { useMusic } from "../../context/MusicContext";
import URLPath from "../../helpers/classes/URLPath";

const MusicList = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = new URLPath(pathname);
  const model = path.end;
  const data = useMusic().music[model];

  console.log(`data`, data);

  const ListItem = ({ itemData }) => {
    const { id, img_url, name } = itemData;

    const handleItemClick = () => {
      navigate(`${id}`);
    };

    return (
      <li id={id} className="music-list-item" onClick={handleItemClick}>
        <img className="item-img" src={img_url || unavailable} alt="" />
        <h3 className="item-name">{name}</h3>
      </li>
    );
  };

  return (
    <>
      <h2>{model}</h2>
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
