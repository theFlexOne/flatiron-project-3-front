import React from "react";
import "./model.css";

const Model = ({ records, selectRecord }) => {
  console.log(`records`, records);

  const handleRecordClick = (e) => {
    const id = e.currentTarget.id;
    selectRecord(id);
  };

  return (
    <ul className="records-list records">
      {records.map((record) => {
        // console.log(`record`, record);
        return (
          <li
            key={record.id}
            id={record.id}
            className="record"
            onClick={handleRecordClick}
          >
            <img src={record.img_url} height="50px" alt="" />
            <h4>{record.name}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Model;
