import {
  CreatePokemonContainer,
  DropdownButton,
  DropdownText,
  DropdownSVG,
  LinkToCreation,
  CreationButton,
} from "./StyledCreatePokemon";
import { ReactComponent as DownSVG } from "../../assets/icons/down.svg";
import { useState } from "react";

const CreatePokemon = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <CreatePokemonContainer dropdown={dropdown}>
      <DropdownButton
        dropdown={dropdown}
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <DropdownText dropdown={dropdown}>create pokémon</DropdownText>
        <DropdownSVG dropdown={dropdown}>
          <DownSVG width="1.5em" />
        </DropdownSVG>
      </DropdownButton>
      <LinkToCreation dropdown={dropdown}>
        <CreationButton dropdown={dropdown} to="/form">
          take me there
        </CreationButton>
      </LinkToCreation>
    </CreatePokemonContainer>
  );
};

export default CreatePokemon;
