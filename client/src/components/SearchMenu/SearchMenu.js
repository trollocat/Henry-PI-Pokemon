import { useSelector } from "react-redux";

const SearchMenu = () => {
  const types = useSelector((state) => state.types);
  return <div>{types.map((type)=><p>{type.name}</p>)}</div>;
};

export default SearchMenu;
