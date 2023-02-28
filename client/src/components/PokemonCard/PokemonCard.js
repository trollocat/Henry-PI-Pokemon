import { useState } from "react";
import {
  CardContainer,
  DetailLink,
  PokemonTitle,
  PokemonImage,
  LabelWrapper,
  Label,
} from "./StyledPokemonCard";

const PokemonCard = ({ name, image, id, types }) => {
  // default image loader
  const defaultPokemonImage = "pokemon-default.png";
  const [imageSrc, setImageSrc] = useState(defaultPokemonImage);

  const handleImageLoad = () => {
    setImageSrc(image);
  };

  const handleImageError = () => {
    setImageSrc(defaultPokemonImage);
  };  

  return (
    <CardContainer className="card3d">
      <DetailLink to={`/detail/${id}`}>
        <PokemonTitle>{name}</PokemonTitle>
        <PokemonImage
          src={imageSrc}
          onLoad={handleImageLoad}
          onError={handleImageError}
          alt={name}
        ></PokemonImage>
        <LabelWrapper labelCount={types.length}>
          {types.map((type) => (
            <Label key={type} src={`/type_labels/${type}.png`} />
          ))}
        </LabelWrapper>
      </DetailLink>
    </CardContainer>
  );
};

export default PokemonCard;
