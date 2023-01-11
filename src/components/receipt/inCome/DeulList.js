import React from "react";
import DeulListItem from "./DeulListItem";

const DeulList = ({ payList, onRemove, onCheckedToggle, onChangeChecked }) => {
  return (
    <div className="DeulList" style={{ padding: "0", minHeight: "150px" }}>
      {payList.map(list => (
        <DeulListItem
          list={list}
          key={list.id}
          flag={list.flag}
          // remove={onRemove}
          onChecked={onCheckedToggle}
          onChangeChecked={onChangeChecked}
        />
      ))}
    </div>
  );
};

export default DeulList;
