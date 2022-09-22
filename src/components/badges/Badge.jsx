import React from "react";
import styled from "styled-components";

const CBadge = styled.span`
  background-color: ${(props) => props.color};
  height: 20px;
  width: 20px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Badge({ text, color="#F8475F", children }) {
  return (
    <CBadge text={text} color={color}>
      {
        children || <p>{text}</p>
      }  
    </CBadge>
  );
}

export default Badge;
