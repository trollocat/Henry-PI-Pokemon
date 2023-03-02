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
    <CreatePokemonContainer dropdown={dropdown.toString()}>
      <DropdownButton
        dropdown={dropdown.toString()}
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <DropdownText dropdown={dropdown.toString()}>create pokémon</DropdownText>
        <DropdownSVG dropdown={dropdown.toString()}>
          <DownSVG width="1.5em" />
        </DropdownSVG>
      </DropdownButton>
      <LinkToCreation dropdown={dropdown.toString()}>
        <CreationButton dropdown={dropdown.toString()} to="/form">
          take me there
        </CreationButton>
      </LinkToCreation>
    </CreatePokemonContainer>
  );
};

export default CreatePokemon;
