import React from "react";
import DeulListItem from "./DeulListItem";

const DeulList = ({ deulList }) => {
  return (
    <ul className="DeulList" style={{ listStyle: "none", padding: "0" }}>
      {deulList.map(list => (
        <DeulListItem list={list} key={list.id} />
      ))}
    </ul>
  );
};

export default DeulList;
