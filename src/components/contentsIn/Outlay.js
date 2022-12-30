import React from "react";
import styled from "styled-components";

const Outlay = () => {
  return (
    <NalWrapper>
      <div className="header">
        <h3 style={{ textAlign: "center" }}>NAL</h3>
        <span
          className="add"
          style={{
            position: "absolute",
            top: "-5px",
            left: "290px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          +
        </span>
      </div>
      <hr
        className="dash"
        style={{
          border: "1px dashed #4b4b4b",
          backgroundColor: "#F9DE87",
        }}
      />
    </NalWrapper>
  );
};
const NalWrapper = styled.div`
  min-height: 300px;
  .header {
    position: relative;
  }
`;

export default Outlay;
