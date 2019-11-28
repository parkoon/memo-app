import styled from "styled-components";

export const StyledButton = styled.div`
  width: ${props => (props.fit ? "100%" : "")};
  border: 1px solid tomato;
  display: inline-block;
  text-align: center;
  padding: 5px 7px;
  /* border-radius: 7px; */
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.1s;
  margin-right: ${props => (props.mr ? props.mr + "px" : "0px")};
  &:hover {
    background: tomato;
    color: #fff;
  }
`;
