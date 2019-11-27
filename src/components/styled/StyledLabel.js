import styled from "styled-components";

export const StyledLabelBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  overflow: auto;

  h4 {
    text-align: right;
    padding: 7px 7px;
  }
`;

export const StyledLabel = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: red;
  }

  &.selected {
    font-weight: bold;
    background: red;
  }
`;
