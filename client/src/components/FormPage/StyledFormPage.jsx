import styled, { css } from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

const margin = "0.6rem";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
  /* background-color: ${(props) => props.theme.colors.background}; */
  background: url(${(props) => props.theme.tileBackground}) repeat;
`;

export const FormContainer = styled.form`
  ${WidgetA};
  position: absolute;
  flex-direction: column;
  display: flex;
  top: 30.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45rem;
  gap: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const FormTitle = styled.h1`
  margin: ${margin};
  padding: 0;
  font-size: 3.9rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 1px 1px 3px ${(props) => props.theme.colors.background};
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Field = styled.div`
  --padding-vertical: 1.65rem;
  display: flex;
  justify-content: right;
  font-size: 1.4rem;
  padding: 1rem;
  padding-top: var(--padding-vertical);
  padding-bottom: var(--padding-vertical);
  margin: ${margin};
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.primary &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
      align-items: center;
    `};

  ${(props) =>
    props.image &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 21rem;
      width: 100%;
    `};
`;

export const FieldFileInput = styled.input``;

export const FieldImage = styled.img`
  max-height: 12rem;
  max-width: 100%;
`;

export const FieldLabel = styled.label``;

export const InputField = styled.input`
  width: 3rem;
  font-size: 1rem;
  font-family: geometos;
  ${(props) =>
    props.primary &&
    css`
      font-family: signika;
      font-size: 1.5rem;
      font-weight: bold;
      width: 100%;
    `};

  ${(props) =>
    props.image &&
    css`
      font-family: signika;
      font-size: 1rem;
      font-weight: bold;
      width: 100%;
    `};
`;

export const ImageStatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  row-gap: 1rem;
`;

export const Label = styled.img`
  width: 7.5rem;
  transition: 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
    filter: saturate(50%);
    opacity: 100%;
  }

  ${(props) =>
    props.selected
      ? css`
          filter: saturate(100%);
          opacity: 100%;
          transform: scale(115%);

          &:hover {
            filter: saturate(100%);
            opacity: 100%;
            transform: scale(115%);
          }
        `
      : css`
          filter: saturate(0%);
          opacity: 50%;
        `}
`;

export const SubmitButton = styled.button`
  float: center;
  font-family: signika;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem;
  margin: ${margin};
  gap: 1rem;
  border: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
