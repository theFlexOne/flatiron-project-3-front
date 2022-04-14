import "./musicForm.css";
import React, { useState } from "react";

const MusicForm = ({ trackID, setTrackID, handleSubmit }) => {
  const [isAdding, setIsAdding] = useState(true);
  return (
    <div className="record-edit">
      <form
        className="add-remove-form"
        onSubmit={(e) => handleSubmit(e, isAdding)}
      >
        <label htmlFor="id-input">
          {`${isAdding ? "Add" : "Remove"} track`}:
        </label>
        <input
          type="number"
          name="id-input"
          id="id-input"
          placeholder="Track ID"
          value={trackID}
          onChange={(e) => setTrackID(e.target.value)}
        />
        <span className="radio-buttons-wrapper">
          <label htmlFor="add">Add:</label>
          <input
            type="radio"
            name="add-remove"
            id="add"
            checked={isAdding === true}
            onChange={() => setIsAdding(true)}
          />
          <label htmlFor="remove">Remove:</label>
          <input
            type="radio"
            name="add-remove"
            id="remove"
            checked={isAdding === false}
            onChange={() => setIsAdding(false)}
          />
        </span>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default MusicForm;
