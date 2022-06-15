import React from "react";
import styled from "styled-components";

const HeaderBox = styled.header`
  background-color: #c29e0f;
  min-height: 13vh;
  text-anchor: middle;
`;

export default function Header() {
  return (
    <HeaderBox>
      <h1>Keeper!</h1>
    </HeaderBox>
  );
}
