import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const InputContainer = styled.div`
  ${WidgetA};
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
`;
export const SearchInput = styled.input`
  flex-grow: 1;
  height: fit-content;
  font-size: 1.5rem;
`;
