import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const InputContainer = styled.div`
  ${WidgetA};
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
  `;
export const SearchInput = styled.input`
  font-family: Signika;
  flex-grow: 1;
  height: fit-content;
  font-size: 1.5rem;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 0.9em;
    width: 0.9em;
    border-radius: 50em;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }
  &:focus::-webkit-search-cancel-button {
    opacity: 0.3;
    pointer-events: all;
  }
  &:hover::-webkit-search-cancel-button {
    opacity: 0.3;
    pointer-events: all;
  }
`;

export const FancyButton = styled.button`
  border: none;
  background: transparent;
  padding-top: 0.25em;
  margin-left: 0.5em;
  background: ${(props) => props.theme.colors.secondary};
  fill: ${(props) => props.theme.colors.text};
  border-radius: 0.8em;
  stroke: none;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.tertiary};
  }
`;
