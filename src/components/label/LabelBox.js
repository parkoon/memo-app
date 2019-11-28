import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledLabelBox, StyledLabel } from "../styled/StyledLabel";

// Actions
import { fetchLabels, postLabel } from "../../actions/label";

// Components
import Button from "../Button";

const LabelBox = () => {
  const dispatch = useDispatch();
  const labels = useSelector(state => state.labels);

  useEffect(() => {
    dispatch(fetchLabels());
  }, []);

  const addLabel = () => {
    console.log("add label");
    dispatch(postLabel("라벨"));
  };

  return (
    <StyledLabelBox>
      <h4>전체 메모 (152)</h4>
      <Button title={"추가하기"} fit onClick={addLabel} />

      {labels.map(label => (
        <StyledLabel>
          {label.title} ({label.memos.length})
        </StyledLabel>
      ))}
    </StyledLabelBox>
  );
};

export default LabelBox;
