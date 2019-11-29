import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledMemoForm } from "../styled/StyledMemo";
import Button from "../Button";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";

// Actions
import { postMemo } from "../../actions/memo";

const MemoForm = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { labelId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleChange = useCallback(e => {
    if (e.target.name === "content") {
      setContent(e.target.value);
    } else {
      setTitle(e.target.value);
    }
  });
  const submit = useCallback(() => {
    if (!title && !content) return alert("값을 모두 입력해주세요!");
    dispatch(postMemo({ title, content }, labelId)).then(id => {
      history.push(`${url}/${id} `);
    });
  });

  return (
    <StyledMemoForm>
      <h4>메모 작성하기</h4>
      <input
        value={title}
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="제목을 입력해주세요..."
      ></input>
      <textarea
        value={content}
        name="content"
        onChange={handleChange}
        cols="50"
        rows="30"
        placeholder="내용을 입력해주세요..."
      ></textarea>
      <Button fit title="저장하기" onClick={submit}></Button>
    </StyledMemoForm>
  );
};

export default MemoForm;
