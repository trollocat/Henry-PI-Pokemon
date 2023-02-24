import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from 'styled-components'
import {
  DetailContainer,
  PokemonImage,
  PokemonTitle,
  BackButton,
} from "./StyledDetailPage";
import { ReactComponent as Back } from '../../assets/icons/back.svg';

const Detail = () => {
  const theme = useTheme();
  const pokemons = useSelector((state) => state.pokemons);
  const { pokemonId } = useParams();
  let pokemon = {};
  if (isNaN(Number(pokemonId))) {
    pokemon = { ...pokemons.find(({ id }) => id === pokemonId) };
  } else {
    pokemon = { ...pokemons[pokemonId] };
  }
  return (
    <DetailContainer>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      <PokemonTitle>{pokemon.name}</PokemonTitle>
      <BackButton to="/home">
        <Back height="3em" stroke={theme.colors.text} />
      </BackButton>
    </DetailContainer>
  );
};

export default Detail;
