import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledMemo } from "../styled/StyledMemo";
import { useParams } from "react-router-dom";
import moment from "moment";

// Actions
import { fetchMemo, updateMemo } from "../../actions/memo";

// Components
import Button from "../Button";

const Memo = () => {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { labelId, memoId } = useParams();
  const dispatch = useDispatch();
  let memo = useSelector(state => state.memo);

  const toggleUpdate = useCallback(({ target }) => {
    if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") return;
    if (toggle) dispatch(updateMemo({ title, content, id: memoId }));
    setToggle(!toggle);
  });

  const handleChange = useCallback(({ target }) => {
    if (target.name === "content") {
      setContent(target.value);
    } else {
      setTitle(target.value);
    }
  });

  useEffect(() => {
    dispatch(fetchMemo(memoId));
    setToggle(false);
  }, [memoId]);

  useEffect(() => {
    setTitle(memo.title);
    setContent(memo.content);
  }, [memo]);

  return (
    <StyledMemo onClick={toggleUpdate}>
      <header>
        {!toggle ? (
          <h3 className="memo__title">{memo.title}</h3>
        ) : (
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
          />
        )}

        <div className="memo__actions">
          {/* <Button
            onClick={() => {
              alert("1");
            }}
            title={"버튼"}
          /> */}

          <span>제목 수정됨: {moment(memo.updatedAt).fromNow()}</span>
        </div>
      </header>
      {/* https://offbyone.tistory.com/326 */}
      {!toggle ? (
        <main>{memo.content}</main>
      ) : (
        <textarea
          cols="50"
          rows="30"
          name="content"
          onChange={handleChange}
          value={content}
        >
          {memo.content}
        </textarea>
      )}
    </StyledMemo>
  );
};

export default Memo;
