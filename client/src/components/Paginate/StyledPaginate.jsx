import styled, { css } from "styled-components";

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 4px 0px ${(props) => props.theme.colors.accent},
    0px 0px 8px -5px ${(props) => props.theme.colors.text};
`;

export const PageNumber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.1rem;
  width: 3.5rem;
  border: 0;
  font-family: Geometos;
  text-align: center;
  font-size: 1.5em;
  border-radius: 0.2em;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
  }

  ${(props) =>
    props.isCurrent &&
    css`
      background-color: ${(props) => props.theme.colors.tertiary};
    `}
`;

export const PageArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.1rem;
  width: 3.5rem;
  margin: 0;
  border: 0;
  border-radius: 0.2em;
  fill: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover:not([disabled]) {
    fill: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
  }

  &:disabled {
    fill: ${(props) => props.theme.colors.grayed};
    background-color: unset;
    opacity: 50%;
  }
`;
