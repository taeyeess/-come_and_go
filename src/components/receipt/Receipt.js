import React, { useState, useRef } from "react";
import styled from "styled-components";
import DeulList from "./inCome/DeulList";
import NalList from "./outLay/NalList";
import ComeOutModal from "../modal/ComeOutModal";
import pngegg from "../../../src/images/pngegg.png";

const Receipt = () => {
  const date = new Date();
  const year = date.getFullYear();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();
  // console.log(`${year}/ ${todayMonth}/ ${todayDate}`);

  //https://chojonghoon.github.io/react/report/household/report-household/
  //const formatDate = (date: string): string => {
  //const year = date.substr(0, 4);
  //const month = date.substr(4, 2);
  //const day = date.substr(6, 2);
  //return year + "/" + month + "/" + day;
  //};

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

  // +버튼 실행시 열리는 모달창 내부에 들락, 날락 여부를 판단하는 btn
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
    //   price: "6000",
    //   checked: false,
    //   flag: true,
    // },
  ]);

  const nextId = useRef(0);
  // 항목 추가하기
  const onInsert = (text, price, flag) => {
    // let intPrice = Number(price);
    // spread 연산자
    // 객체 payList에 text를 오버라이드
    //setPayList([...payList, text]);
    const list = {
      id: nextId.current,
      text,
      // intPrice,
      price: Number(price),
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

  // 개별항목 삭제하기
  const onRemove = id => {
    setPayList(payList.filter(list => list.id !== id));
  };

  // 체크된 항목 삭제하기
  const onRemoveChecked = checked => {
    setPayList(payList.filter(list => list.checked !== true));
    // setChangeBtn(false);
  };

  // 체크 여부 토글
  const onCheckedToggle = id => {
    setPayList(
      payList.map(list =>
        list.id === id ? { ...list, checked: !list.checked } : list,
      ),
    );

    // console.log(payList[0].checked);
    // setChangeBtn(
    //   payList.map(list => {
    //     if (list.checked) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }),
    // );
  };
  // payList(객체배열)를 조회해서 checked의 여부에 따라 boolean값을 내어주는 some함수 이용. 이 여부에 따라 버튼의 모양이 변경됨
  const onChangeChecked = payList.some(list => list.checked === true);
  console.log(payList);
  console.log(onChangeChecked);

  // 체크 여부에 따른 버튼 모양의 변화
  // const [changeBtn, setChangeBtn] = useState(false);
  // const onChangeChecked = checked => {
  //   setChangeBtn(
  //     payList.map(list => {
  //       if (list.checked) {
  //         return true;
  //       }
  //     }),
  //   );
  // };
  const isDeul = payList.filter(list => list.flag === true);
  const deulTotal = isDeul.reduce((a, b) => {
    return a + b.price;
  }, 0);
  const isNal = payList.filter(list => list.flag === false);
  const nalTotal = isNal.reduce((a, b) => {
    return a + b.price;
  }, 0);
  const total = deulTotal - nalTotal;
  // const totalPrice ={totalprice}.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const totalPrice = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div
      style={{
        position: "absolute",
        width: "350px",
        height: "900px",
        left: "45px",
        top: "136px",
        backgroundColor: "#F9DE87",
        padding: "0px 20px",
        boxSizing: "border-box",
        boxShadow: "0 4px 4px rgb(0 0 0 / 30%)",
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
      <div className="income">
        <DeulHeader>
          <h3 style={{ textAlign: "center" }}>Deul</h3>
          {/* {console.log(onChangeChecked)} */}
          {onChangeChecked ? (
            <span onClick={onRemoveChecked} className="deulBtn">
              -
            </span>
          ) : (
            <span
              onClick={onClickPlus}
              // btnActive={btnActive}
              // switchBtnActive={switchBtnActive}
              className="deulBtn"
            >
              +
            </span>
          )}
          <hr
            className="dash"
            style={{
              border: "1px dashed #4b4b4b",
              backgroundColor: "#F9DE87",
            }}
          />
        </DeulHeader>
        {/* <Deul /> */}
        <DeulList
          payList={payList}
          // onRemove={onRemove}
          onCheckedToggle={onCheckedToggle}
          onRemoveChecked={onRemoveChecked}
          // onChangeChecked={onChangeChecked}
        />
        {console.log(deulTotal)}
      </div>
      <div className="outlay" style={{ minHeight: "300px" }}>
        <NalHeader>
          <h3 style={{ textAlign: "center" }}>NAL</h3>
          {onChangeChecked ? (
            <span onClick={onRemoveChecked} className="nalBtn">
              -
            </span>
          ) : (
            <span
              onClick={onClickPlus}
              // btnActive={btnActive}
              // switchBtnActive={switchBtnActive}
              className="nalBtn"
            >
              +
            </span>
          )}
          <hr
            className="dash"
            style={{
              border: "1px dashed #4b4b4b",
              backgroundColor: "#F9DE87",
            }}
          />
        </NalHeader>
        {/* <Nal /> */}
        <NalList
          payList={payList}
          onCheckedToggle={onCheckedToggle}
          onRemoveChecked={onRemoveChecked}
        />
        {console.log(nalTotal)}
      </div>
      <div>*******************************************</div>
      <div
        className="total"
        style={{ fontSize: "25px", fontWeight: "900", padding: "10px 5px" }}
      >
        TOTAL{" "}
        <span
          style={{ fontWeight: "normal", position: "absolute", right: "25px" }}
        >
          ₩ {totalPrice}
        </span>
      </div>
      <div style={{ marginTop: "50px", width: "300px" }}>
        <img
          className="barcode"
          src={pngegg}
          alt="바코드이미지"
          width="300px"
        ></img>
      </div>
      <div style={{ textAlign: "center", letterSpacing: "3px" }}>
        HAVE A NICE DAY &#58;&#41;
      </div>
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

  .deulBtn {
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

  .nalBtn {
    position: absolute;
    top: -5px;
    right: 0;
    font-size: 25px;
    cursor: pointer;
  }
`;
export default Receipt;
