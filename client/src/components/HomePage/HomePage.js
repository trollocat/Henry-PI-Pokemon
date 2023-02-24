import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Cards from "../Cards/Cards";
import Paginate from "../Paginate/Paginate";

import { BigContainer } from "./StyledHomePage";
import { BackButton } from "../DetailPage/StyledDetailPage";
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
      <Cards></Cards>
      <Paginate></Paginate>
    </BigContainer>
  );
};

export default Home;
