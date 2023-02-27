import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonA } from "../../css/DesignPatterns/ButtonA";

export const BackButton = styled(Link)`
  ${ButtonA}

  stroke: ${(props) => props.theme.colors.text};
  position: fixed;
  top: 1.5em;
  left: 1.5em;
  // font-size controls the entire button size thanks to em
  font-size: 1rem;
`;
