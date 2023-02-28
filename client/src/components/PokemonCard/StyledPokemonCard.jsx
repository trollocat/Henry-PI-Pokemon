import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const DetailLink = styled(Link)`
  max-width: 100%;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

export const CardContainer = styled.div`
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
  text-align: center;
  margin: 0;
  font-size: 1.3em;
`;

export const PokemonImage = styled.img`
  max-width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8em;
  padding: 0.5em;
  overflow-x: hidden;

  ${(props) =>
    props.labelCount > 2 &&
    css`
      &:hover {
        overflow-x: auto;
        padding-bottom: .85em;
      }
    `}
`;

export const Label = styled.img`
  z-index: 2;
  max-width: 4rem;
`;
