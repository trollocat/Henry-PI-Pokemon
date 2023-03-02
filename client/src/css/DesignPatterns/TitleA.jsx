import {css} from "styled-components";

export const TitleA = css`
  margin: 0;
  font-size: 6em;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 1px 2px 2px ${(props) => props.theme.colors.accent},
    0 0 6px ${(props) => props.theme.colors.background};
`;