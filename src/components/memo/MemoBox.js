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
          <Button
            mr={7}
            onClick={() => {
              alert("1");
            }}
            title={"버튼"}
          />
          <Button
            mr={7}
            onClick={() => {
              alert("1");
            }}
            title={"버튼"}
          />
          <Button
            onClick={() => {
              alert("1");
            }}
            title={"버튼"}
          />
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
