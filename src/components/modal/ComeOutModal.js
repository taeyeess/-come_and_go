import React, { useState } from "react";
import styled from "styled-components";

const ComeOutModal = ({ cancel }) => {
  const [btnActive, setBtnActive] = useState(false);
  // console.log(btnActive);

  const onClickBtn = () => {
    setBtnActive(true);
    console.log(btnActive);
  };
  return (
    <ModalWrapper>
      <ModalHeader>
        <div>
          <button
            className={"income" + " " + (btnActive ? "active" : "")}
            onClick={onClickBtn}
          >
            들락
          </button>
          <button className="out" onClick={onClickBtn}>
            날락
          </button>
        </div>
        <span className="cancel" onClick={cancel}>
          X
        </span>
      </ModalHeader>
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
export default ComeOutModal;
