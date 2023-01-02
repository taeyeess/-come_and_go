import React from "react";
import Receipt from "./receipt/Receipt";
import Note from "./note/Note";
import CheckList from "./checkList/CheckList";

const Contents = () => {
  return (
    <div>
      <Receipt />
      <Note />
      <CheckList />
    </div>
  );
};

export default Contents;
