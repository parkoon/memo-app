import React, { useCallback, useState, useEffect } from "react";
import moment from "moment";

import { StyledMemoList } from "../styled/StyledMemo";
import { useRouteMatch } from "react-router-dom";

const MemoList = props => {
  const [check, setCheck] = useState(false);
  let { path, url } = useRouteMatch();

  const handleChange = useCallback(({ target }) => {
    setCheck(target.checked);
    props.handleCheckItem(props.id, target.checked);
  });

  return (
    <StyledMemoList {...props}>
      <input
        type="checkbox"
        onClick={e => {
          e.stopPropagation();
        }}
        checked={check}
        onChange={handleChange}
      />
      <div className="memo-list__info">
        <h4 className="info__title">{props.title}</h4>
        <p className="info__desc">{props.content}</p>
      </div>
      <div>{moment(props.updatedAt).format("MMM Do")}</div>
    </StyledMemoList>
  );
};

export default MemoList;
