import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const DetailLink = styled(Link)`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  // 1:√2 is the typical aspect ratio for cards
  aspect-ratio: 1/1.41421356237;
  height: 14rem;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: transform cubic-bezier(0, 0.5, 0.85, 1) 230ms;
  outline: solid 0.3rem ${(props) => props.theme.colors.tertiary};

  // [wip] 3d card effect (efecto de los cromos de steam para los pibardos)

  &:hover {
    z-index: 10;
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const PokemonTitle = styled.h1`
  ${WidgetA};
  position: absolute;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: 1.3em;
  hyphens: auto;
  word-break: break-all;
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  z-index: 2;
`;

export const PokemonImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 10rem;
`;

export const LabelWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 85%;
  width: 89%;
  display: flex;
  justify-content: center;
  gap: 0.8em;
  padding: 0.5em;
  overflow-x: hidden;

  ${(props) =>
    props.labelCount > 2 &&
    css`
      justify-content: left;
      &:hover {
        overflow-x: scroll;
        padding-bottom: 0.8em;
      }
    `}
`;

export const Label = styled.img`
  z-index: 2;
  max-width: 4rem;
`;

export const ThreeDots = styled.label`
  position: absolute;
  bottom: -0.35rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  z-index: 2;
  pointer-events: none;
  color: ${(props) => props.theme.colors.grayed};
`;
