import { useDispatch } from "react-redux";
import {
  orderPokemonsByAttack,
  orderPokemonsByName,
} from "../../redux/actions";
import {
  OrderContainer,
  SelectOption,
  Select,
  Option,
} from "./StyledSearchOrder";

const SearchOrder = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.id === "name") {
      dispatch(orderPokemonsByName(event.target.value));
    }
    if (event.target.id === "attack") {
      dispatch(orderPokemonsByAttack(event.target.value));
    }
  };

  return (
    <OrderContainer>
      <SelectOption>
        <label htmlFor="name">sort by name:</label>
        <Select
          onChange={onChangeHandler}
          name="name"
          id="name"
          defaultValue="0"
        >
          <Option value="0" disabled></Option>
          <Option value="asc">a → z</Option>
          <Option value="desc">z → a</Option>
        </Select>
      </SelectOption>
      <SelectOption>
        <label htmlFor="attack">sort by attack:</label>
        <Select
          onChange={onChangeHandler}
          name="attack"
          id="attack"
          defaultValue="0"
        >
          <Option value="0" disabled></Option>
          <Option value="desc">high → low</Option>
          <Option value="asc">low → high</Option>
        </Select>
      </SelectOption>
    </OrderContainer>
  );
};

export default SearchOrder;
