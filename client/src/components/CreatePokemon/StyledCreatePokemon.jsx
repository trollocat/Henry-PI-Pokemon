import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const CreatePokemonContainer = styled.div`
  ${WidgetA}
  position: fixed;
  right: 2em;
  top: 12rem;
  padding: 1em;
  width: 26rem;
  z-index: 11;
`;
