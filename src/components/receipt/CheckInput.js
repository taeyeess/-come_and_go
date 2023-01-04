import React from "react";

const CheckInput = () => {
  return (
    <>
      <input type="checkbox" id="checked" style={{ display: "none" }}></input>
      <label
        htmlFor="checked"
        style={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          border: "1px solid black",
          backgroundColor: "green",
          // backgroundImage: "url(../../../../../public/images/checked.png)",
          cursor: "pointer",
          margin: "0 4px",
        }}
      ></label>
    </>
  );
};

export default CheckInput;
