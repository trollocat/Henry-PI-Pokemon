import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const OrderContainer = styled.div`
  ${WidgetA};
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 1rem;
  font-size: 1.1rem;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 0.5rem;
  gap: 0.5rem;
`;

export const Select = styled.select``;

export const Option = styled.option``;
