import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleA } from "../../css/DesignPatterns/TitleA";

export const BigContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 32rem;
  min-height: 100%;
  background: url(${(props) => "../" + props.theme.splashScreen}) no-repeat center
    center fixed;
  background-size: cover;

  font-family: Highway-Gothic;
`;

export const Title = styled.h1`
  ${TitleA}
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
    padding-left: 2em;
    padding-right: 2em;
    background-color: ${(props) => props.theme.colors.tertiary};
    box-shadow: 1px 2px 8px ${(props) => props.theme.colors.text};
  }
`;
