import React from "react";
import NalListItem from "./NalListItem";

const NalList = ({ payList }) => {
  return (
    <div className="NalList" style={{ padding: "0" }}>
      {payList.map(list => (
        <NalListItem list={list} key={list.id} flag={list.flag} />
      ))}
    </div>
  );
};

export default NalList;
