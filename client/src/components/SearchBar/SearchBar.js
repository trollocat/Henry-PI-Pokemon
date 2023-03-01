import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../redux/actions";
import { InputContainer, SearchInput, FancyButton } from "./StyledSearchBar";
import { ReactComponent as SearchSVG } from "../../assets/icons/search.svg";
import { ReactComponent as ClearSVG } from "../../assets/icons/clear.svg";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const onClickClearHandler = () => {
    setSearch("");
    dispatch(searchPokemons(""));
  };
  const onClickSendHandler = () => {
    dispatch(searchPokemons(search));
  };
  return (
    <InputContainer>
      <SearchInput
        placeholder="search pokémon..."
        value={search}
        onChange={onChangeHandler}
      ></SearchInput>
      {search !== "" && (
        <FancyButton onClick={onClickClearHandler}>
          <ClearSVG width="1.8em" />
        </FancyButton>
      )}
      <FancyButton onClick={onClickSendHandler}>
        <SearchSVG width="1.8em" />
      </FancyButton>
    </InputContainer>
  );
};

export default SearchBar;
