import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemons } from "../../redux/actions";
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
  const [mounted, setMounted] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    bySource: { api: true, db: true },
    byType: [],
  });
  const dispatch = useDispatch();
  const handleTypeClick = (name) => {
    setSelectedFilters((prevSelectedTypes) => {
      if (prevSelectedTypes.byType.includes(name)) {
        return {
          ...selectedFilters,
          byType: prevSelectedTypes.byType.filter((type) => type !== name),
        };
      } else {
        return {
          ...selectedFilters,
          byType: [...prevSelectedTypes.byType, name],
        };
      }
    });
  };
  const handleSourceCheck = (source) => {
    if (source === "db")
      setSelectedFilters({
        ...selectedFilters,
        bySource: {
          ...selectedFilters.bySource,
          db: !selectedFilters.bySource.db,
        },
      });
    else
      setSelectedFilters({
        ...selectedFilters,
        bySource: {
          ...selectedFilters.bySource,
          api: !selectedFilters.bySource.api,
        },
      });
  };
  useEffect(() => {
    if (mounted) {
      dispatch(filterPokemons(selectedFilters));
    } else {
      setMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedFilters]);
  return (
    <FilterContainer>
      <CheckboxesContainer>
        <SourceLabelCheckbox>
          <SourceLabel>show api pokémons:</SourceLabel>
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
            selected={selectedFilters.byType.includes(type.name)}
            onClick={() => handleTypeClick(type.name)}
            src={`/type_labels/${type.name}.png`}
          />
        ))}
      </LabelWrapper>
    </FilterContainer>
  );
};

export default SearchFilter;
