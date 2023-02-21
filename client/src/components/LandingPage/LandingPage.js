import { Title, BigContainer, HomeLink } from "./StyledLandingPage";

const Landing = () => {
  return (
    <BigContainer>
      <Title>minimal pokédex</Title>
      <HomeLink to="/home">discover</HomeLink>
    </BigContainer>
  );
};

export default Landing;
