import React from "react";
import styled from "styled-components";

const CInput = styled.input`
  width: ${props => props.width};
  padding: 18px 30px;
  border-radius: 6pt;
  border: none;
  ::placeholder {
    color: #585858;
  }
`;

function Input({ width, type = "text", placeholder, ...inputProps }) {
  return (
    <CInput width={width} type={type} placeholder={placeholder} {...inputProps}></CInput>
  );
}

export default Input;
