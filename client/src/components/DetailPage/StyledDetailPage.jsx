import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
`;

export const BackButton = styled(Link)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3vh;
  left: 3vh;
  height: 4em;
  width: 4em;
  border-radius: 3em;
  stroke: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 2px 1px 0 ${(props) => props.theme.colors.accent},
    0px 0px 8px -5px ${(props) => props.theme.colors.text};
  user-select: none;
  cursor: pointer;
  transition: transform ease-in-out 120ms;
  // font-size controls the entire button size thanks to em
  font-size: 1rem;

  &:hover {
    transform: scale(108%);
  }
`;

export const PokemonImage = styled.img`
  height: 600px;
`;

export const PokemonTitle = styled.h2`
  margin: 0;
  text-align: center;
`;
