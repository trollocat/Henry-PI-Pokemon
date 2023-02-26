import styled from "styled-components";

export const BigContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 100%;
  color: ${(props) => props.theme.colors.text};
  /* background-color: ${(props) => props.theme.colors.background}; */
  background: url(${(props) => props.theme.tileBackground}) repeat;
`;
