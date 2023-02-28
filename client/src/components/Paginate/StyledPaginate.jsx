import styled, { css } from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const PaginateContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.7rem;
  padding: 0.5rem;
  gap: 1.5rem;
  z-index: 2;
  ${WidgetA}
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
  stroke: ${(props) => props.theme.colors.text};
  fill: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover:not([disabled]) {
    stroke: ${(props) => props.theme.colors.accent};
    fill: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
  }

  &:disabled {
    stroke: ${(props) => props.theme.colors.grayed};
    fill: ${(props) => props.theme.colors.grayed};
    background-color: unset;
  }
`;
