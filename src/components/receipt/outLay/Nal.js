import React from "react";
import styled from "styled-components";

const Outlay = () => {
  return (
    <NalWrapper>
      <div className="header">
        <h3 style={{ textAlign: "center" }}>NAL</h3>
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
`;

export default Outlay;
