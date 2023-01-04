import React from "react";

const CheckOutInput = () => {
  return (
    <>
      <input type="checkbox" id="checkout" style={{ display: "none" }}></input>
      <label
        htmlFor="checkout"
        style={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          border: "1px solid black",
          cursor: "pointer",
          margin: "0 4px",
        }}
      ></label>
    </>
  );
};

export default CheckOutInput;
