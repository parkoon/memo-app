import React from "react";
import { StyledMemoList } from "../styled/StyledMemo";

const MemoList = props => {
  return (
    <StyledMemoList {...props}>
      <input
        // name="isGoing"
        type="checkbox"
        // checked={this.state.isGoing}
        // onChange={this.handleInputChange}
      />
      <div className="memo-list__info">
        <h4 className="info__title">제목</h4>
        <p className="info__desc">babababababdssdfsdfdsfa</p>
      </div>
      <div>2019.09.02</div>
    </StyledMemoList>
  );
};

export default MemoList;
