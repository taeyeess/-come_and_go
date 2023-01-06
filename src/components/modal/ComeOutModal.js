import React, { useState } from "react";
import styled from "styled-components";

const ComeOutModal = ({ cancel }) => {
  const [btnDeulActive, setBtnDeulActive] = useState(false);
  const [btnNalActive, setBtnNalActive] = useState(false);
  // console.log(btnActive);

  const onClickDeulBtn = () => {
    setBtnDeulActive(true);
    setBtnNalActive(false);
  };

  const onClickNalBtn = () => {
    setBtnNalActive(true);
    setBtnDeulActive(false);
  };
  return (
    <ModalWrapper>
      <ModalHeader>
        <div>
          <button
            className={"income" + " " + (btnDeulActive ? "active" : "")}
            onClick={onClickDeulBtn}
          >
            들락
          </button>
          <button
            className={"out" + " " + (btnNalActive ? "active" : "")}
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
        <form>
          항목 : <input type="text" autoFocus></input>
        </form>
        <form>
          금액 : <input type="text"></input>
        </form>
        <div className="submitButton">완료</div>
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
  top: 0;
  left: 0;
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
    margin-bottom: 5px;
    :focus {
      outline: none;
    }
  }
  .submitButton {
    position: absolute;
    left: 105px;
    bottom: 20px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
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
