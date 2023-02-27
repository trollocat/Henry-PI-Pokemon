import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DetailContainer,
  PokemonImage,
  PokemonTitle,
} from "./StyledDetailPage";
import { BackButton } from "../BackButton/StyledBackButton";
import { ReactComponent as BackSVG } from '../../assets/icons/back.svg';

const Detail = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const { pokemonId } = useParams();
  const pokemon = { ...pokemons.find(({ id }) => String(id) === pokemonId) };

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      <PokemonTitle>{pokemon.name}</PokemonTitle>
      <BackButton to="/home">
        <BackSVG height="3em" />
      </BackButton>
    </DetailContainer>
  );
};

export default Detail;
