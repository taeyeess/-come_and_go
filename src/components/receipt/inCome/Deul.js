import React, { useState, useRef } from "react";
import styled from "styled-components";
import DeulList from "./DeulList";
import ComeOutModal from "../../modal/ComeOutModal";

const Deul = ({ deulList }) => {
  // const [deulList, setDeulList] = useState([
  //   {
  //     id: 1,
  //     text: "월급",
  //     checked: true,
  //     price: "3,000,000",
  //   },
  //   {
  //     id: 2,
  //     text: "캐시백",
  //     checked: true,
  //     price: "12,000",
  //   },
  //   {
  //     id: 3,
  //     text: "당근거래",
  //     checked: false,
  //     price: "15,000",
  //   },
  // ]);
  // const [deulList, setDeulList] = useState([]);

  // const nextId = useRef(0);
  // const handleSubmit = text => {
  //   //setDeulList([...deulList, text]);
  //   const list = {
  //     id: nextId.current,
  //     text: "",
  //     checked: false,
  //   };
  //   setDeulList(deulList.concat(list));
  //   nextId.current += 1; //nextId를 1씩 더하기
  // };

  // // localStroage에 저장
  // const addList = () => {
  //   localStorage.setItem();
  // };

  return (
    <div>
      <DeulList deulList={deulList} />
    </div>
  );
};

export default Deul;
