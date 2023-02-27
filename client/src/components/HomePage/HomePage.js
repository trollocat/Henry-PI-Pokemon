import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Cards from "../Cards/Cards";
import Paginate from "../Paginate/Paginate";
import Search from "../Search/Search";
import CreatePokemon from "../CreatePokemon/CreatePokemon";

import { BigContainer } from "./StyledHomePage";
import { BackButton } from "../BackButton/StyledBackButton";
import { fetchTypes, fetchPokemons } from "../../redux/actions";
import { ReactComponent as Back } from "../../assets/icons/back.svg";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <BigContainer>
      <BackButton to="/">
        <Back height="3em" />
      </BackButton>
      <Search></Search>
      <Cards></Cards>
      <Paginate></Paginate>
      <CreatePokemon></CreatePokemon>
    </BigContainer>
  );
};

export default Home;
