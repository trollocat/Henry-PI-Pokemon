import SearchBar from "../SearchBar/SearchBar";
import SearchOrder from "../SearchOrder/SearchOrder";
import SearchFilter from "../SearchFilter/SearchFilter";
import { SearchContainer } from "./StyledSearch";
import { useSelector } from "react-redux";

const Search = () => {
  const types = useSelector((state) => state.types);
  return (
    <SearchContainer>
      <SearchBar></SearchBar>
      <SearchOrder></SearchOrder>
      {types.length ? <SearchFilter types={types}></SearchFilter> : "hola"}
    </SearchContainer>
  );
};

export default Search;
