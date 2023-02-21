import { Title, BigContainer, HomeLink } from "./StyledLandingRoute";

const Landing = () => {
  return (
    <BigContainer>
      <Title>minimal pokedex</Title>
      <HomeLink to="/home">discover</HomeLink>
    </BigContainer>
  );
};

export default Landing;
