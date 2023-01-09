import React from "react";
import cn from "classnames";
import CheckInput from "../CheckInput";
import CheckOutInput from "../CheckOutInput";
import styled from "styled-components";

const NalListItem = ({ list, flag }) => {
  const { id, text, checked, price } = list;
  return (
    <NalListItems
      className="NalListItem"
      style={{
        listStyle: "none",
        // display: "flex",
        // justifyContent: "space-between",
      }}
    >
      {flag ? (
        ""
      ) : (
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
            - {price}
          </div>
        </div>
      )}
    </NalListItems>
  );
};

const NalListItems = styled.div`
  .checked {
    color: #b9b69a;
    text-decoration-line: line-through;
    text-decoration-color: red;
  }
`;
export default NalListItem;
