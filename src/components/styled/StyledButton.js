import styled from "styled-components";

export const StyledButton = styled.div`
  border: 1px solid tomato;
  display: inline-block;
  padding: 5px 7px;
  border-radius: 7px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.1s;
  margin-right: ${props => (props.mr ? props.mr + "px" : "0px")};
  &:hover {
    background: tomato;
    color: #fff;
  }
`;
