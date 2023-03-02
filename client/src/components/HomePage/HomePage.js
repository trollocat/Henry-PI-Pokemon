import Cards from "../Cards/Cards";
import Paginate from "../Paginate/Paginate";
import Search from "../Search/Search";
import CreatePokemon from "../CreatePokemon/CreatePokemon";

import { BigContainer } from "./StyledHomePage";
import { BackButton } from "../BackButton/StyledBackButton";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPokemons, fetchTypes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!types.length) dispatch(fetchTypes());
    if (!pokemons.length) dispatch(fetchPokemons());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const { types, allPokemons, pokemons, currentPage } = useSelector(
    (state) => state
  );
  return (
    <BigContainer>
      <BackButton to="/">
        <Back height="3em" />
      </BackButton>
      <Search></Search>
      <Cards
        allPokemons={allPokemons}
        pokemons={pokemons}
        currentPage={currentPage}
      ></Cards>
      <Paginate></Paginate>
      <CreatePokemon></CreatePokemon>
    </BigContainer>
  );
};

export default Home;
