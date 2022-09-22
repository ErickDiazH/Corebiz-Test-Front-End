import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  width: ${(props) => props.width ?? "100%"};
  height: 30px;
  border: 1px solid #7a7a7a;
  border-top-color: white;
  border-left-color: white;
  border-right-color: white;
  ::placeholder {
    color: #7a7a7a;
  }
`;

function CInputIcon({ width, type = "text", placeholder, id, label }) {
  return (
    <CustomInput width={width} type={type} placeholder={placeholder} id={id} />
  );
}

export default CInputIcon;
