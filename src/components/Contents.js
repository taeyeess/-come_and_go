import React from "react";
import Receipt from "./contentsIn/Receipt";
import Note from "./contentsIn/Note";
import CheckList from "./contentsIn/CheckList";

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
