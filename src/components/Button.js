import React from "react";
import { StyledButton } from "./styled/StyledButton";
const Button = props => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

export default Button;
