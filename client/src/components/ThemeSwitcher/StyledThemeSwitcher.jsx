import styled, { css } from "styled-components";

export const DropdownCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3vh;
  right: calc(6.5vh - (200vh - 100%));
  height: 4em;
  width: 4em;
  border-radius: 3em;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 1px 2px 1px 0 ${(props) => props.theme.colors.accent},
    0px 0px 8px -5px ${(props) => props.theme.colors.text};
  user-select: none;
  cursor: pointer;
  transition: transform ease-in-out 120ms;
  // font-size controls the entire button size thanks to em
  font-size: 1rem;

  &:hover {
    transform: scale(108%);
  }

  ${(props) => props.dropdown && css``}
`;
