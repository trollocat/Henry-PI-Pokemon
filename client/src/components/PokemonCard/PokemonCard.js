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
    <CardContainer>
      <DetailLink to={`/detail/${id}`}>
        <PokemonTitle>{name}</PokemonTitle>
        <PokemonImage
          src={imageSrc}
          onLoad={handleImageLoad}
          onError={handleImageError}
          alt={name}
        ></PokemonImage>
        <LabelWrapper>
          {types.map((type) => (
            <Label src={`/type_labels/${type}.png`} />
          ))}
        </LabelWrapper>
      </DetailLink>
    </CardContainer>
  );
};

export default PokemonCard;