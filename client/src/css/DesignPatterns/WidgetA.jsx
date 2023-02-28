import { css } from "styled-components";

export const WidgetA = css`
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 5px -1px ${(props) => props.theme.colors.accent},
  0px 0px 8px -5px ${(props) => props.theme.colors.text};
  border-radius: 0.4rem;
`;
