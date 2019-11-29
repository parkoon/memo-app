import styled from "styled-components";

export const StyledMemoBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  header {
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    .memo-box__actions {
      display: flex;
    }
  }
`;

export const StyledMemo = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    .memo__actions {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  main {
    width: 90%;
    /* word-wrap: break-word; */
    white-space: pre;
  }

  textarea {
    width: 100%;
    height: 60%;
  }
`;

export const StyledMemoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  align-items: center;
  grid-gap: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 72px;
  cursor: pointer;
  transition: 0.1s;

  &.selected {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  input {
    width: 19px;
    height: 19px;
    cursor: pointer;
  }

  .memo-list__info {
    p {
      display: inline-block;
      width: 120px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
  }
`;

export const StyledMemoForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  h4 {
    margin-bottom: 12px;
  }
  input {
    padding: 7px 12px;
    margin-bottom: 12px;
  }

  textarea {
    padding: 7px 12px;
    margin-bottom: 12px;
  }
`;
