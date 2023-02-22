import PokeCardList from "../PokeCardList/PokeCardList";
import { BigContainer } from "./StyledHomePage";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../../redux/actions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  console.log(pokemons);

  return (
    <BigContainer>
      <PokeCardList></PokeCardList>
    </BigContainer>
  );
};

export default Home;
