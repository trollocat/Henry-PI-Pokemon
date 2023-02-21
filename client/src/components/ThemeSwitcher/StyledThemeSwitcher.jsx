import styled, { css } from "styled-components";

export const DropdownCircle = styled.div`
  position: absolute;
  top: 3vh;
  right: 3vh;
  height: 4em;
  width: 4em;
  border-radius: 3em;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 1px 2px 1px 0 ${(props) => props.theme.colors.accent},
    0px 0px 8px -5px ${(props) => props.theme.colors.text};
  user-select: none;
  cursor: pointer;
  animation: ease-in-out 500ms;
  // font-size controls the entire button size thanks to em
  font-size: 1rem;

  ${(props) => props.dropdown && css``}
`;
export const InnerCircleContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
export const InnerCircle = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 0.05em 0.3em 0.1em 0.25em;
  border-radius: 0.25em;
`;

export const SampleText = styled.label`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-size: 1.5em;
  pointer-events: none;
`;
