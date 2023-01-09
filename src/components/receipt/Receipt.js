import React, { useState, useRef } from "react";
import styled from "styled-components";
import Deul from "./inCome/Deul";
import DeulList from "./inCome/DeulList";
import Nal from "./outLay/Nal";
import NalList from "./outLay/NalList";
import ComeOutModal from "../modal/ComeOutModal";

const Receipt = () => {
  const date = new Date();
  const year = date.getFullYear();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();
  // console.log(`${year}/ ${todayMonth}/ ${todayDate}`);

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

  // btnActive 상태값을 변경하기 위한 함수. 실질적으로 ComeOutModal컴포넌트에 보내져서 상태값을 변경받음
  const switchBtnActive = flag => {
    setBtnActive(flag);
    console.log(flag);
    console.log(btnActive);
  };

  // ------------------------------------------------------

  const [payList, setPayList] = useState([
    // {
    //   id: 1,
    //   text: "카페",
    //   price: "2,000",
    //   checked: false,
    //   flag: true,
    // },
    // {
    //   id: 2,
    //   text: "밥",
    //   price: "6,000",
    //   checked: false,
    //   flag: true,
    // },
  ]);

  const nextId = useRef(0);

  const onInsert = (text, price, flag) => {
    //setPayList([...payList, text]);
    const list = {
      id: nextId.current,
      text,
      price,
      flag,
      checked: false,
    };
    setPayList(payList.concat(list));
    nextId.current += 1; //nextId를 1씩 더하기
  };
  // console.log(payList);

  // localStroage에 저장
  const addList = () => {
    localStorage.setItem();
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
      <DeulHeader>
        <h3 style={{ textAlign: "center" }}>Deul</h3>
        <span
          onClick={onClickPlus}
          // btnActive={btnActive}
          // switchBtnActive={switchBtnActive}
          className="deulAdd"
        >
          +
        </span>
        <hr
          className="dash"
          style={{
            border: "1px dashed #4b4b4b",
            backgroundColor: "#F9DE87",
          }}
        />
      </DeulHeader>
      {/* <Deul /> */}
      <DeulList payList={payList} />
      <NalHeader>
        <h3 style={{ textAlign: "center" }}>NAL</h3>
        <span
          onClick={onClickPlus}
          className="nalAdd"
          // switchBtnActive={switchBtnActive}
        >
          +
        </span>
        <hr
          className="dash"
          style={{
            border: "1px dashed #4b4b4b",
            backgroundColor: "#F9DE87",
          }}
        />
      </NalHeader>
      {/* <Nal /> */}
      <NalList payList={payList} />
      {modalVisible && (
        <ComeOutModal
          cancel={onClickCancel}
          switchBtnActive={switchBtnActive}
          // btnActive={btnActive}
          // addList={addList}
          onInsert={onInsert}
          // payList={payList}
          // setPayList={setPayList}
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

const DeulHeader = styled.header`
  /* min-height: 200px; */
  position: relative;

  h3 {
    text-align: center;
  }

  .deulAdd {
    position: absolute;
    top: -5px;
    right: 0;
    font-size: 25px;
    cursor: pointer;
  }
`;

const NalHeader = styled.header`
  /* min-height: 200px; */
  position: relative;

  h3 {
    text-align: center;
  }

  .nalAdd {
    position: absolute;
    top: -5px;
    right: 0;
    font-size: 25px;
    cursor: pointer;
  }
`;
export default Receipt;
