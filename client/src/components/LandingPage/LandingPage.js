import { useEffect } from "react";
import { Title, BigContainer, HomeLink } from "./StyledLandingPage";


const Landing = () => {
  useEffect(()=>{},[])
  return (
    <BigContainer>
      <Title>minimal pokédex</Title>
      <HomeLink to="/home">discover</HomeLink>
    </BigContainer>
  );
};

export default Landing;
