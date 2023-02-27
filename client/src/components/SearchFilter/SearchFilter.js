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
  const selectType = (event) => {
    const isSelected = event.target.getAttribute("selected");
    if (isSelected) {
      alert("saco");
    } else {
      alert("pongo");
    }
  };
  return (
    <FilterContainer>
      <CheckboxesContainer>
        <SourceLabelCheckbox>
          <SourceLabel>show user created:</SourceLabel>
          <SourceCheckbox type="checkbox" defaultChecked></SourceCheckbox>
        </SourceLabelCheckbox>
        <SourceLabelCheckbox>
          <SourceLabel>show api pokemons:</SourceLabel>
          <SourceCheckbox type="checkbox" defaultChecked></SourceCheckbox>
        </SourceLabelCheckbox>
      </CheckboxesContainer>
      <LabelWrapper>
        {types?.map((type) => (
          <Label
            key={type.name}
            onClick={selectType}
            title={type.name}
            src={`/type_labels/${type.name}.png`}
          />
        ))}
      </LabelWrapper>
    </FilterContainer>
  );
};

export default SearchFilter;
