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
  width: 40rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const FormTitle = styled.h1`
  margin: ${margin};
  padding: 0;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 1px 1px 3px ${(props) => props.theme.colors.background};
`;

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FieldFileInput = styled.input``;

export const FieldImage = styled.img`
  max-height: 85%;
  max-width: 100%;
`;

export const FieldLabel = styled.label``;

export const InputField = styled.input`
  ${(props) =>
    props.primary &&
    css`
      font-size: 1.6rem;
      width: 100%;
    `};
`;

export const Field = styled.div`
  display: flex;
  justify-content: right;
  font-size: 1.3rem;
  padding: 1rem;
  margin: ${margin};
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.primary &&
    css`
      align-items: center;
    `};

  ${(props) =>
    props.image &&
    css`
      flex-direction: column;
      align-items: center;
      height: 21rem;
    `};
`;
export const SubmitButton = styled.button`
  float: center;
  font-family: signika;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 1rem;
  margin: ${margin};
  gap: 1rem;
  border: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover{
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
