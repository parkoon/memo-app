import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledLabelBox, StyledLabel } from "../styled/StyledLabel";

import { Link, useRouteMatch, NavLink } from "react-router-dom";

// Actions
import { fetchLabels, postLabel } from "../../actions/label";

// Components
import Button from "../Button";
import NoData from "../NoData";

const LabelBox = () => {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLabel") || ""
  );
  const dispatch = useDispatch();
  const labels = useSelector(state => state.labels);
  const countTotalMemos = useCallback(() => {
    let count = 0;
    labels.forEach(label => {
      count += label.memos.length;
    });
    return count;
  });

  useEffect(() => {
    dispatch(fetchLabels());
  }, []);

  const addLabel = () => {
    const label = prompt("라벨 이름을 적어주세요");
    if (label) dispatch(postLabel(label));
  };

  return (
    <StyledLabelBox>
      <h4>전체 메모 ({countTotalMemos()})</h4>
      <Button title={"추가하기"} fit onClick={addLabel} />
      {labels.length === 0 ? (
        <NoData title="라벨이 없습니다." />
      ) : (
        labels.map(label => (
          <NavLink
            to={`/label/${label._id}`}
            onClick={() => {
              localStorage.setItem("activeLabel", label._id);
              localStorage.setItem("activeMemo", "");
              setActiveLink(label._id);
            }}
          >
            <StyledLabel className={activeLink === label._id && "selected"}>
              {label.title} ({label.memos.length})
            </StyledLabel>
          </NavLink>
        ))
      )}
    </StyledLabelBox>
  );
};

export default LabelBox;
