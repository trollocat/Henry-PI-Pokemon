import { useSelector } from "react-redux";
import { MainContainer, Wrapper } from "./StyledCards";
import PokemonCard from "../PokemonCard/PokemonCard";

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  return (
    <MainContainer>
      <Wrapper>
        {pokemons.length ? (
          pokemons?.map((pokemon) => {
            return <PokemonCard name={pokemon.name} image={pokemon.image} />;
          })
        ) : (
          <h1>loading pokemons...</h1>
        )}
      </Wrapper>
    </MainContainer>
  );
};

export default Cards;
