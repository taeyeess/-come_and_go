import React from "react";
import DeulListItem from "./DeulListItem";

const DeulList = ({ deulList }) => {
  return (
    <div className="DeulList" style={{ padding: "0", minHeight: "150px" }}>
      {deulList.map(list => (
        <DeulListItem list={list} key={list.id} />
      ))}
    </div>
  );
};

export default DeulList;
