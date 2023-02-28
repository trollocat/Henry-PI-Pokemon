import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterPokemonsBySource,
  filterPokemonsByType,
} from "../../redux/actions";
import {
  FilterContainer,
  Label,
  LabelWrapper,
  CheckboxesContainer,
  SourceLabelCheckbox,
  SourceCheckbox,
  SourceLabel,
} from "./StyledSearchFilter";

const SearchFilter = ({ types }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState({ api: true, db: true });
  const dispatch = useDispatch();
  const handleTypeClick = (name) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(name)) {
        return prevSelectedTypes.filter((type) => type !== name);
      } else {
        return [...prevSelectedTypes, name];
      }
    });
  };
  const handleSourceCheck = (source) => {
    if (source === "db")
      setCheckedBoxes({ ...checkedBoxes, db: !checkedBoxes.db });
    else setCheckedBoxes({ ...checkedBoxes, api: !checkedBoxes.api });
  };
  useEffect(() => {
    dispatch(filterPokemonsByType(selectedTypes));
  }, [dispatch, selectedTypes]);
  useEffect(() => {
    dispatch(filterPokemonsBySource(checkedBoxes));
  }, [dispatch, checkedBoxes]);
  return (
    <FilterContainer>
      <CheckboxesContainer>
        <SourceLabelCheckbox>
          <SourceLabel>show api pokemons:</SourceLabel>
          <SourceCheckbox
            type="checkbox"
            onChange={() => handleSourceCheck("api")}
            defaultChecked
          ></SourceCheckbox>
        </SourceLabelCheckbox>
        <SourceLabelCheckbox>
          <SourceLabel>show user created:</SourceLabel>
          <SourceCheckbox
            type="checkbox"
            onChange={() => handleSourceCheck("db")}
            defaultChecked
          ></SourceCheckbox>
        </SourceLabelCheckbox>
      </CheckboxesContainer>
      <LabelWrapper>
        {types?.map((type) => (
          <Label
            key={type.id}
            title={type.name}
            selected={selectedTypes.includes(type.name)}
            onClick={() => handleTypeClick(type.name)}
            src={`/type_labels/${type.name}.png`}
          />
        ))}
      </LabelWrapper>
    </FilterContainer>
  );
};

export default SearchFilter;
