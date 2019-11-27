import React from "react";
import { StyledMemoBox } from "../styled/StyledMemo";
import { MemoList } from ".";
import Button from "../Button";

const MemoBox = () => {
  return (
    <StyledMemoBox>
      <header>
        <h4>라벨3</h4>
        <div className="memo-box__actions">
          <Button />
          <Button />
          <Button />
        </div>
      </header>

      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
      <MemoList></MemoList>
    </StyledMemoBox>
  );
};

export default MemoBox;
