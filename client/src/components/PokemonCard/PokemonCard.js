import { CardContainer } from "./StyledPokemonCard";
const PokemonCard = ({ name, image }) => {
  return (
    <CardContainer>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
    </CardContainer>
  );
};

export default PokemonCard;
