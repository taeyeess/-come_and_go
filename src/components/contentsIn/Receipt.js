import React, { useRef, useState } from "react";
import styled from "styled-components";
import InCome from "./InCome";
import Outlay from "./Outlay";

const Receipt = () => {
  const date = new Date();
  const year = date.getFullYear();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();
  // console.log(`${year}/ ${todayMonth}/ ${todayDate}`);
  const inputRef = useRef();

  const [value, setValue] = useState("");

  // input태그의 focus-out을 위한 form태그의 onSubmit함수
  const onSubmit = e => {
    // const code = e.code;
    e.preventDefault();
    // setValue(e.target.value);
    console.log(value);
    // if (code === "Enter") {
    //   inputRef.current.blur();
    // }
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "350px",
        height: "720px",
        left: "45px",
        top: "136px",
        backgroundColor: "#F9DE87",
        padding: "0px 20px",
        boxSizing: "border-box",
      }}
    >
      <Title>RECEIPT</Title>
      <UserInfo>
        <form className="name" onSubmit={onSubmit}>
          CASHIER :
          <input
            type="text"
            // refs={inputRef}
            placeholder="이름을 입력하세요"
            // autoFocus
            value={value || ""}
            onChange={e => setValue(e.target.value)}
          ></input>
        </form>
        <div className="date">
          DATE : {year}/ {todayMonth}/ {todayDate}
        </div>
      </UserInfo>
      <InCome />
      <Outlay />
    </div>
  );
};

const Title = styled.h3`
  text-align: center;
  font-size: 32px;
`;

const UserInfo = styled.div`
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
