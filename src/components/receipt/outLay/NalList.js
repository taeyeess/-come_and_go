import React from "react";
import NalListItem from "./NalListItem";

const NalList = () => {
  return (
    <div className="NalList" style={{ padding: "0" }}>
      {NalList.map(list => (
        <NalListItem list={list} key={list.id} />
      ))}
    </div>
  );
};

export default NalList;
