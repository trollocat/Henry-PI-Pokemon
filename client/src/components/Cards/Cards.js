import { useSelector } from "react-redux";
import { MainContainer, Wrapper } from "./StyledCards";
import PokemonCard from "../PokemonCard/PokemonCard";

const Cards = () => {
  const { pokemons, currentPage } = useSelector((state) => state);
  let slicedPokemons = pokemons?.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  return (
    <MainContainer>
      <Wrapper>
        {slicedPokemons?.length ? (
          slicedPokemons?.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                id={pokemon.id}
                types={pokemon.types}
              />
            );
          })
        ) : (
          <h1>loading pokemons...</h1>
        )}
      </Wrapper>
    </MainContainer>
  );
};

export default Cards;
