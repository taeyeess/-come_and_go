import React from "react";
import styled from "styled-components";

const ComeOutModal = ({ cancel }) => {
  return (
    <ModalWrapper>
      <header>
        <button>수입</button>
        <button>지출</button>
        <button onClick={cancel}>X</button>
      </header>
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
export default ComeOutModal;
