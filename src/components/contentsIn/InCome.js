import React, { useState } from "react";
import styled from "styled-components";
import DeulList from "./DeulList";

const InCome = () => {
  const [deulList, setDeulList] = useState([
    {
      id: 1,
      text: "월급",
      checked: true,
      price: "3,000,000",
    },
    {
      id: 2,
      text: "캐시백",
      checked: true,
      price: "12,000",
    },
    {
      id: 3,
      text: "당근거래",
      checked: false,
      price: "15,000",
    },
  ]);
  return (
    <DeulWrapper>
      <div className="header">
        <h3 style={{ textAlign: "center" }}>Deul</h3>
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
      <DeulList deulList={deulList} />
    </DeulWrapper>
  );
};

const DeulWrapper = styled.div`
  min-height: 150px;
  .header {
    position: relative;
  }
`;

export default InCome;
