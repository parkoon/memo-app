import styled from "styled-components";

export const StyledLabelBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  h4 {
    text-align: right;
    padding: 7px 7px;
  }
`;

export const StyledLabel = styled.div`
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  transition: 0.1s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &.selected {
    font-weight: bold;
    background: rgba(0, 0, 0, 0.1);
  }
`;
