import "./library.css";

import React, { useState } from "react";

const Library = () => {
  const [searchFilter, setSearchFilter] = useState("title");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Library</h2>
      <div className="library-search">
        <form onSubmit={handleSearch}>
          <h3>Search Tracks:</h3>
          <label htmlFor="track-input"></label>
          <input
            type="text"
            id="track-input"
            placeholder="Enter Search Text Here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span>
            <label htmlFor="name">Name</label>
            <input
              type="radio"
              name="search-filter"
              id="name"
              checked={searchFilter === "name"}
              onChange={(e) => setSearchFilter(e.target.id)}
            />
            <label htmlFor="artist">Artist</label>
            <input
              type="radio"
              name="search-filter"
              id="artist"
              checked={searchFilter === "artist"}
              onChange={(e) => setSearchFilter(e.target.id)}
            />
            <label htmlFor="album">Album</label>
            <input
              type="radio"
              name="search-filter"
              id="album"
              checked={searchFilter === "album"}
              onChange={(e) => setSearchFilter(e.target.id)}
            />
            <label htmlFor="playlist">Playlist</label>
            <input
              type="radio"
              name="search-filter"
              id="playlist"
              checked={searchFilter === "playlist"}
              onChange={(e) => setSearchFilter(e.target.id)}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default Library;
