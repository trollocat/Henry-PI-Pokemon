import { css } from "styled-components";

export const ButtonA = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
  width: 4em;
  border-radius: 3em;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 2px 3px -1px ${(props) => props.theme.colors.accent},
    0px 0px 8px -5px ${(props) => props.theme.colors.text};
  user-select: none;
  cursor: pointer;
  transition: transform ease-in-out 120ms;

  &:hover {
    transform: scale(108%);
  }
`;
