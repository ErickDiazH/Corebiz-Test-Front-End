import React from "react";
import styled from "styled-components";

const CButton = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 5pt;
  color: ${(props) => props.textColor};
  padding: 18px 30px;
  width: ${(props) => props.width};
  border: none;
  cursor: pointer;
`;

function Button({
  text,
  width,
  type = "button",
  color = "#000000",
  textColor = "#FFFFFF",
  children,
  ...buttonProps
}) {
  return (
    <CButton type={type} width={width} color={color} textColor={textColor} {...buttonProps}>
      <p>{text}</p>
      {children}
    </CButton>
  );
}

export default Button;
