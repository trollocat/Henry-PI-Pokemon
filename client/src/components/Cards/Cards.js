import {
  MainContainer,
  Wrapper,
  LoadingGIF,
  LoadingWrapper,
  LoadingText,
} from "./StyledCards";
import PokemonCard from "../PokemonCard/PokemonCard";

const Cards = ({ allPokemons, pokemons, currentPage }) => {
  let slicedPokemons = pokemons?.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  return (
    <MainContainer>
      <Wrapper>
        {allPokemons.length ? (
          slicedPokemons.length ? (
            slicedPokemons.map((pokemon) => {
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
            <h2>
              sorry, we couldn't find any pokémons matching your search
            </h2>
          )
        ) : (
          <LoadingWrapper>
            <LoadingGIF src="loading.gif" alt="loading" />
            <LoadingText>loading, please be patient...</LoadingText>
          </LoadingWrapper>
        )}
      </Wrapper>
    </MainContainer>
  );
};

export default Cards;
