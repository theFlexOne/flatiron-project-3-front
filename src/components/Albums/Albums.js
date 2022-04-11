import "./albums.css";
import React from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

const Albums = () => {
  const { albums } = useOutletContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Albums</h2>
    </div>
  );
};

export default Albums;
