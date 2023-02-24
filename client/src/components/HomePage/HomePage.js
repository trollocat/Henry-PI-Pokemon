import Cards from "../Cards/Cards";
import { BigContainer } from "./StyledHomePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTypes, fetchPokemons } from "../../redux/actions";

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
      <Cards></Cards>
    </BigContainer>
  );
};

export default Home;
