import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

const ComeOutModal = ({ cancel, onInsert, switchBtnActive }) => {
  // css를 동적으로 바꾸기 위한 상태값, 수입과 지출을 구분하는 상태값
  const [flag, setFlag] = useState(true);

  const [content, setContent] = useState("");
  // const ref = useRef();
  const [price, setPrice] = useState("");

  //이벤트가 발생할 때마다 (글자가 하나씩 입력될 때 마다) 변화를 감지
  const handleContentChange = e => {
    setContent(e.target.value);
  };
  const handlePriceChange = e => {
    setPrice(e.target.value);
  };
  const handleSubmit = useCallback(
    e => {
      onInsert(content, price, flag);
      setContent("");
      Number(setPrice(""));
      // e.preventDefault();
    },
    [onInsert, content, price, flag],
  );
  // const onClickAddButton = () => {
  //   const nextPayList = payList.concat({
  //     id: payList.length,
  //     content,
  //   });
  //   setPayList(nextPayList);
  // };

  // useEffect(() => {
  //   console.log(onInsert);
  // }, [onInsert]);

  const onClickDeulBtn = () => {
    // btnActive(true);
    setFlag(true);
    switchBtnActive(true);
  };

  const onClickNalBtn = () => {
    // btnActive(false);
    setFlag(false);
    switchBtnActive(false);
  };

  return (
    <ModalWrapper>
      <ModalHeader>
        <div>
          <button
            className={"income" + " " + (flag ? "active" : "")}
            onClick={onClickDeulBtn}
          >
            들락
          </button>
          <button
            className={"out" + " " + (flag ? "" : "active")}
            onClick={onClickNalBtn}
          >
            날락
          </button>
        </div>
        <span className="cancel" onClick={cancel}>
          X
        </span>
      </ModalHeader>
      <ModalContents>
        <form onSubmit={handleSubmit}>
          <div>
            항목 :
            <input
              type="text"
              name="payItem"
              placeholder="항목을 입력하세요"
              value={content}
              onChange={handleContentChange}
              autoFocus
            ></input>
          </div>
          <div>
            금액 :
            <input
              type="number"
              name="price"
              placeholder="금액을 입력하세요"
              value={price}
              onChange={handlePriceChange}
            ></input>
          </div>
          <button
            type="submit"
            className="submitButton"
            onClick={() => {
              cancel();
              handleSubmit();
              // onClickAddButton();
              //addList();
            }}
          >
            ADD
          </button>
        </form>
      </ModalContents>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 310px;
  height: 400px;
  background-color: white;
  box-shadow: 0 20px 30px rgb(0 0 0 / 20%);
  border-radius: 20px;
  position: absolute;
  top: 170px;
  left: 20px;
  z-index: 1;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 10px;

  button {
    background-color: #fafafa;
    padding: 10px 15px;
    border-radius: 0 20px 20px 0;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0px;
    overflow: visible;
    cursor: pointer;
    &:hover {
      background-color: #ffd740;
      transition: 0.3s;
      letter-spacing: 2px;
      transform: scale(1.2);
      box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    }
    &.active {
      box-shadow: inset 0 0 3px #aeaca0;
      background-color: #ffd740;
    }
  }

  .income {
    background-color: #fafafa;
    padding: 10px 15px;
    border-radius: 20px 0 0 20px;
  }
  .out {
    background-color: #fafafa;
    padding: 10px 15px;
    border-radius: 0 20px 20px 0;
    /* box-shadow: 0 5px 20px rgb(0 0 0 / 20%); */
  }
  .cancel {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    cursor: pointer;
    /* background-color: green; */
  }
`;

const ModalContents = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px;
  /* background-color: red; */
  input {
    width: 100px;
    border: 0;
    background-color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
    margin-left: 5px;
    :focus {
      outline: none;
    }
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .submitButton {
    position: absolute;
    left: 105px;
    bottom: 20px;
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    border: 2px solid #ffd740;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      border: 2px solid #ffe68c;
      background-color: #ffd740;
    }
  }
`;
export default ComeOutModal;
