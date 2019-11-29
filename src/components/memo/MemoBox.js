import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledMemoBox } from "../styled/StyledMemo";
import { deleteMemo } from "../../actions/memo";
import { deleteLabel } from "../../actions/label";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";

// Components
import MemoList from "./MemoList";
import Button from "../Button";
import NoData from "../NoData";

const MemoBox = () => {
  const [memos, setMemos] = useState([]);
  const [label, setLabel] = useState({});
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeMemo") || ""
  );

  const { labelId, memoId } = useParams();
  const labels = useSelector(state => state.labels);
  const dispatch = useDispatch();
  const history = useHistory();
  let { path, url } = useRouteMatch();

  const checkedGroup = [];

  const handleCheckItem = useCallback((id, checked) => {
    if (checked) {
      checkedGroup.push(id);
    } else {
      checkedGroup.splice(checkedGroup.indexOf(id), 1);
    }
  });

  const setMemosFromLabel = useCallback(labels => {
    const index = labels.findIndex(label => label._id === labelId);
    if (labels[index]) {
      setLabel(labels[index]);
      setMemos(labels[index].memos);
    }
  });

  useEffect(() => {
    setMemosFromLabel(labels);
    setActiveLink(localStorage.getItem("activeMemo"));
  }, [labels, labelId]);

  return (
    <StyledMemoBox>
      <header>
        <h4>{label.title}</h4>
        <div className="memo-box__actions">
          <Button
            mr={7}
            onClick={() => {
              history.push(`${url}/memo`);
            }}
            title={"메모하기"}
          />
          <Button
            mr={7}
            onClick={() => {
              dispatch(deleteMemo(labelId, checkedGroup));
            }}
            title={"메모삭제"}
          />
          <Button
            onClick={() => {
              dispatch(deleteLabel(labelId)).then(() => {
                history.push("/label/");
              });
            }}
            title={"라벨삭제"}
          />
        </div>
      </header>

      {memos.length === 0 ? (
        <NoData title="메모가 없습니다." />
      ) : (
        memos.map(memo => (
          <Link
            key={memo._id}
            to={`${url}/memo/${memo._id}`}
            onClick={() => {
              localStorage.setItem("activeMemo", memo._id);
              setActiveLink(memo._id);
            }}
          >
            <MemoList
              handleCheckItem={handleCheckItem}
              id={memo._id}
              {...memo}
              className={activeLink === memo._id && "selected"}
            ></MemoList>
          </Link>
        ))
      )}
    </StyledMemoBox>
  );
};

export default MemoBox;
