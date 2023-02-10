import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Contents from "../components/Contents";

const MainPage = () => {
  return (
    <Main>
      <Header />
      <Contents />
    </Main>
  );
};

const Main = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 20px 30px rgb(0 0 0 / 20%);
  margin: 0px auto;
  padding: 57px 43px;
  position: relative;
  width: 652px;
  height: 944px;
`;
export default MainPage;
