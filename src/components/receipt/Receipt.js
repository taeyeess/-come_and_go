import React, { useRef, useState } from "react";
import styled from "styled-components";
import Deul from "./inCome/Deul";
import Outlay from "./outLay/Nal";
import ComeOutModal from "../modal/ComeOutModal";

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

  const [modalVisible, setModalVisible] = useState(false);

  const onClickPlus = () => {
    setModalVisible(true);
    // console.log(modalVisible);
  };
  const onClickCancel = () => {
    setModalVisible(false);
  };

  const [btnActive, setBtnActive] = useState(true);

  const switchBtnActive = flag => {
    // console.log("1111");
    setBtnActive(flag);
    console.log(flag);
    console.log(btnActive);
    // setModalVisible(true);
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
            autoFocus
            value={value || ""}
            onChange={e => setValue(e.target.value)}
          ></input>
        </form>
        <div className="date">
          DATE : {year}/ {todayMonth}/ {todayDate}
        </div>
      </UserInfo>
      <Deul />
      <span
        onClick={onClickPlus}
        // btnActive={btnActive}
        // switchBtnActive={switchBtnActive}
        className="deulAdd"
        style={{
          position: "absolute",
          top: "150px",
          right: "30px",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        +
      </span>
      <Outlay />
      <span
        onClick={onClickPlus}
        className="nalAdd"
        // switchBtnActive={switchBtnActive}
        style={{
          position: "absolute",
          top: "368px",
          right: "30px",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        +
      </span>
      {modalVisible && (
        <ComeOutModal
          cancel={onClickCancel}
          switchBtnActive={switchBtnActive}
          btnActive={btnActive}
          // addList={addList}
          // handleSubmit={handleSubmit}
          // deulList={deulList}
        />
      )}
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
