import React from "react";
import cn from "classnames";
import CheckInput from "./CheckInput";
import CheckOutInput from "./CheckOutInput";

const DeulListItem = ({ list }) => {
  const { id, text, checked } = list;
  return (
    <li
      className="DeulListItem"
      style={{
        listStyle: "none",
        // display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <div className={cn("checkbox", { checked })}>
        {checked ? <CheckInput /> : <CheckOutInput />}
        <div className="text" style={{ display: "inline" }}>
          {text}
        </div>
      </div>
    </li>
  );
};

export default DeulListItem;
