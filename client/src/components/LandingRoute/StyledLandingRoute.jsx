import styled from "styled-components";
import { Link } from "react-router-dom";

export const BigContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 100%;
  background: url(${(props) => props.theme.splashScreen}) no-repeat center
    center fixed;
  background-size: cover;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 1px 2px 2px #e4404b;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 2em;
  padding: 0.5rem;

  color: ${(props) => props.theme.colors.text};
  border: ${(props) => props.theme.colors.text} solid 2px;
  background-color: ${(props) => props.theme.colors.background};
  
  box-shadow: 1px 2px 2px #e4404b;
`;
