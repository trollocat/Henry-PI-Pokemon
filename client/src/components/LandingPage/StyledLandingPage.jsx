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
  text-shadow: 1px 2px 2px ${(props) => props.theme.colors.accent};
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 2.5em;
  padding: 0.5rem;
  border-radius: 0.3rem;

  color: ${(props) => props.theme.colors.text};
  border: ${(props) => props.theme.colors.text} solid 2px;
  box-shadow: 1px 2px 2px ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.background};
  transition: ease-in-out 150ms;

  &:hover {
    padding-left: 4rem;
    padding-right: 4rem;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 1px 2px 8px ${(props) => props.theme.colors.text};
  }
`;