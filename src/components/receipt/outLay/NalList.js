import React from "react";
import NalListItem from "./NalListItem";

const NalList = ({ payList, onCheckedToggle, onChangeChecked }) => {
  return (
    <div className="NalList" style={{ padding: "0" }}>
      {payList.map(list => (
        <NalListItem
          list={list}
          key={list.id}
          flag={list.flag}
          onChecked={onCheckedToggle}
          onChangeChecked={onChangeChecked}
        />
      ))}
    </div>
  );
};

export default NalList;
