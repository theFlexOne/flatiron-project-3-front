import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MyMusic from "../pages/MyMusic/MyMusic";

const AppRoutes = () => {
  // no major business logic here
  //just a simple/clean routes component

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/my_music" />} />
      <Route path="/my_music/*" element={<MyMusic />} />
    </Routes>
  );
};

export default AppRoutes;
