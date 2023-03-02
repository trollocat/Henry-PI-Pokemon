import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DetailContainer,
  PokemonContainer,
  PokemonImage,
  PokemonTitle,
  PokemonId,
  PokemonInfo,
  LabelWrapper,
  Label,
  StatContainer,
  Stat,
} from "./StyledDetailPage";
import { BackButton } from "../BackButton/StyledBackButton";
import { ReactComponent as BackSVG } from "../../assets/icons/back.svg";

const Detail = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const { pokemonId } = useParams();
  const pokemon = { ...pokemons.find(({ id }) => String(id) === pokemonId) };
  return (
    <DetailContainer>
      <BackButton to="/home">
        <BackSVG height="3em" />
      </BackButton>
      <PokemonContainer>
        <PokemonTitle>{pokemon.name}</PokemonTitle>
        {/* ghost is a fake title that tricks flex into making space for the real one */}
        <PokemonTitle ghost>{pokemon.name}</PokemonTitle>
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
        <PokemonInfo>
          <PokemonId>id: {pokemon.id}</PokemonId>
          <LabelWrapper labelCount={pokemon.types.length}>
            {pokemon?.types.map((type) => (
              <Label
                key={type.id}
                title={type}
                src={`/type_labels/${type}.png`}
              />
            ))}
          </LabelWrapper>
          <StatContainer>
            {["hp", "attack", "defense", "speed", "height", "weight"].map(
              (stat) =>
                pokemon[stat] && (
                  <Stat key={stat}>{`${stat}: ${pokemon[stat]}`}</Stat>
                )
            )}
          </StatContainer>
        </PokemonInfo>
      </PokemonContainer>
    </DetailContainer>
  );
};

export default Detail;
