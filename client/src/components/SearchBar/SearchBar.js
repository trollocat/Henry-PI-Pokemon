import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../redux/actions";
import { InputContainer, SearchInput } from "./StyledSearchBar";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  }
  const onClickHandler = (event) => {
    dispatch(searchPokemons(search));
  };
  return (
    <InputContainer>
      <SearchInput type="search" value={search} onChange={onChangeHandler}></SearchInput>
      <button onClick={onClickHandler}>send</button>
    </InputContainer>
  );
};

export default SearchBar;
