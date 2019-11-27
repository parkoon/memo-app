import styled from "styled-components";

export const StyledMemoBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  overflow: auto;
`;

export const StyledMemo = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 12px 24px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
  }

  main {
  }
`;

export const StyledMemoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  align-items: center;
  grid-gap: 4px;
  border: 1px solid blue;
  height: 72px;

  .memo-list__info {
    p {
      display: inline-block;
      width: 90%;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
  }
`;
