import React, { useState, useRef } from "react";

import NalList from "./NalListItem";

const Nal = () => {
  const [nalList, setNalList] = useState([]);

  const nextId = useRef(0);
  const handleSubmit = text => {
    //setNalList([...nalList, text]);
    const list = {
      id: nextId.current,
      text: "",
      checked: false,
    };
    setNalList(nalList.concat(list));
    nextId.current += 1; //nextId를 1씩 더하기
  };

  // localStroage에 저장
  const addList = () => {
    localStorage.setItem();
  };

  return (
    <div>
      <NalList NalList={NalList} />
    </div>
  );
};

export default Nal;
