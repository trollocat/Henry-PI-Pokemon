import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { orderPokemons } from "../../redux/actions";
import {
  OrderContainer,
  SelectOption,
  Select,
  Option,
} from "./StyledSearchOrder";

const SearchOrder = () => {
  const [mounted, setMounted] = useState(false);
  const [orderRules, setOrderRules] = useState({ name: null, attack: null });
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    if (event.target.id === "name") {
      setOrderRules({ ...orderRules, name: event.target.value });
    }
    if (event.target.id === "attack") {
      setOrderRules({ ...orderRules, attack: event.target.value });
    }
  };

  useEffect(() => {
    if (mounted) {
      dispatch(orderPokemons(orderRules));
    } else {
      setMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, orderRules]);

  return (
    <OrderContainer>
      <SelectOption>
        <label htmlFor="name">sort by name:</label>
        <Select
          onChange={onChangeHandler}
          name="name"
          id="name"
          value={orderRules.name ? orderRules.name === "a → z" ? "asc" : "desc" : 0}
        >
          <Option value="0" disabled style={{ display: "none" }}></Option>
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
          value={orderRules.attack ? orderRules.attack === "high → low" ? "desc" : "asc" : 0}
        >
          <Option value="0" disabled style={{ display: "none" }}></Option>
          <Option value="desc">high → low</Option>
          <Option value="asc">low → high</Option>
        </Select>
      </SelectOption>
    </OrderContainer>
  );
};

export default SearchOrder;
