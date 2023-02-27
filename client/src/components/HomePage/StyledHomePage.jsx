import styled from "styled-components";

export const BigContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
  /* background-color: ${(props) => props.theme.colors.background}; */
  background: url(${(props) => props.theme.tileBackground}) repeat;
`;
