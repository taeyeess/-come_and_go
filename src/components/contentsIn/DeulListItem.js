import React from "react";
import cn from "classnames";
import CheckInput from "./CheckInput";
import CheckOutInput from "./CheckOutInput";

const DeulListItem = ({ list }) => {
  const { id, text, checked, price } = list;
  return (
    <li
      className="DeulListItem"
      style={{
        listStyle: "none",
        // display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <div
        className={cn("checkbox", { checked })}
        style={{ position: "relative" }}
      >
        {checked ? <CheckInput /> : <CheckOutInput />}
        <div className="listItems" style={{ display: "inline" }}>
          {text}
        </div>
        <div
          className="listPrice"
          style={{ display: "inline", position: "absolute", right: "0" }}
        >
          + {price}
        </div>
      </div>
    </li>
  );
};

export default DeulListItem;
