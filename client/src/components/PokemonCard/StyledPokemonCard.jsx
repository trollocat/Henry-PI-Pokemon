import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

export const CardContainer = styled.div`
  border-radius: 0.5rem;
  // 1:√2 is the typical aspect ratio for cards
  aspect-ratio: 1/1.41421356237;
  height: 14rem;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: transform cubic-bezier(0, 0.5, 0.85, 1) 400ms;
  outline: solid .3rem ${props=>props.theme.colors.tertiary};

  &:hover {
    z-index: 99;
    cursor: pointer;
    transform: scale(160%);
  }
`;

export const PokemonTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
`;

export const PokemonImage = styled.img``;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled.img`
  max-width: 4rem;
`;
