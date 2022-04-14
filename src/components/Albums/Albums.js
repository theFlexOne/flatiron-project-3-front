import { useOutletContext, useNavigate } from "react-router-dom";
import "./albums.css";
import unavailableImg from "../../assets/No_Image_Available.jpg";
import usePathname from "../../hooks/usePathname";

const Albums = () => {
  const { albums } = useOutletContext();
  const navigate = useNavigate();

  const { pathname } = usePathname();

  const onAlbumClick = (e) => {
    const { id } = e.currentTarget;
    navigate(`${pathname}/${id}`);
  };

  return (
    <div className="albums music">
      <h2>Albums</h2>
      <div className="cards-container">
        {albums.map((al) => (
          <div key={al.id} className="card" id={al.id} onClick={onAlbumClick}>
            <img
              src={al.img_url === "f" ? unavailableImg : al.img_url}
              alt={`album-image`}
            />
            <p>{al.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;

// import "./albums.css";
// import React from "react";
// import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

// const Albums = () => {
//   const { albums } = useOutletContext();
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Albums</h2>
//     </div>
//   );
// };

// export default Albums;
