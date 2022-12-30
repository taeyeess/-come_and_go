import React from "react";
import styled from "styled-components";

const Receipt = () => {
  const date = new Date();
  const year = date.getFullYear();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();
  // console.log(`${year}/ ${todayMonth}/ ${todayDate}`);
  return (
    <div
      style={{
        position: "absolute",
        width: "350px",
        height: "720px",
        left: "45px",
        top: "136px",
        backgroundColor: "#F9DE87",
      }}
    >
      <Title>RECEIPT</Title>
      <UserInfo>
        <div className="name">
          CASHIER :
          <input type="text" placeholder="이름을 입력하세요" autoFocus></input>
        </div>
        <div className="date">
          DATE : {year}/ {todayMonth}/ {todayDate}
        </div>
      </UserInfo>
      <hr
        className="dash"
        style={{
          width: "320px",
          borderTop: "1px dashed #bbb",
          backgroundColor: "#F9DE87",
        }}
      ></hr>
    </div>
  );
};

const Title = styled.h3`
  text-align: center;
  font-size: 32px;
`;

const UserInfo = styled.div`
  padding-left: 20px;
  .name {
    font-weight: 200;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.15em;
    input {
      width: 100px;
      border: 0;
      background-color: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      :focus {
        outline: none;
        border-bottom: 1px solid grey;
      }
    }
  }
  .date {
    font-weight: 200;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.15em;
  }
`;

export default Receipt;
