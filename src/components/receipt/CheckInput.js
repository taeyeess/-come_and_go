import React from "react";

const CheckInput = () => {
  return (
    <>
      <label
        htmlFor="checked"
        style={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          border: "1px solid black",
          backgroundColor: "black",
          // backgroundImage: "url(../../../public/images/checked.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          cursor: "pointer",
          margin: "0 4px",
        }}
      >
        <input type="checkbox" id="checked" style={{ display: "none" }}></input>
      </label>
    </>
  );
};

export default CheckInput;
