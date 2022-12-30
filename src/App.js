import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Contents from "./components/Contents";
import ResultCoin from "./components/ResultCoin";

function App() {
  return (
    <AppContainer>
      <Main>
        <Header />
        <Contents />
        <ResultCoin />
      </Main>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #5d5fef; */
  background-color: #f199a7;
  color: #4b4b4b;
  padding: 30px 0;
  box-sizing: border-box;
  /* max-width: 600px;
  min-width: 390px;
  max-height: 844px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 54%) 0px 1px 2px; */
  /* 텍스트 드래그 방지 */
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

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
export default App;
