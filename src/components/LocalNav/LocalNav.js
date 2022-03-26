import React from "react";
import constants from "../../helpers/constants";
import LocalLink from "../LocalLink/LocalLink";
import "./localNav.css";

const { MODELS } = constants;

const LocalNav = ({ tabs, selectedTab }) => {
  tabs = MODELS;
  return (
    <div className="local-nav nav">
      {tabs &&
        tabs.map((tab) => (
          <LocalLink
            label={tab.label}
            path={tab.path}
            key={tab.path}
            selected={selectedTab === tab.path}
          />
        ))}
    </div>
  );
};

export default LocalNav;
