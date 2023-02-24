import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailLink = styled(Link)`
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

  &:hover {
    z-index: 99;
    cursor: pointer;
    transform: scale(160%);
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
  flex-wrap: wrap;
  max-height: 1.4rem;
  gap: 0.8em;
  padding: 0.5em;

  &:hover {
    & > :nth-child(n + 3) {
      opacity: 100%;
      transform: translateY(0%);
    }
  }

  & > :nth-child(n + 3) {
    opacity: 0%;
    transform: translateY(-100%);
  }
`;

export const Label = styled.img`
  z-index: 2;
  max-width: 4rem;
  transition: 400ms ease-in-out;
`;
