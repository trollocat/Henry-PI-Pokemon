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
  background: url(${(props) => "../" + props.theme.tileBackground}) repeat;
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
  position: relative;
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
      gap: 0;
    `};
`;

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

export const ValidationIndicator = styled.label`
  position: absolute;
  bottom: 0;
  left: 41%;
  transform: translateX(-50%);
  width: 100%;
  text-align: right;
  color: ${(props) => props.theme.colors.grayed};
  font-size: 1.3rem;

  ${(props) =>
    props.primary &&
    css`
      left: 46%;
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
    transform: scale(105%);
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
  outline: 3px solid ${(props) => props.theme.colors.tertiary};
  transition: 300ms ease-in-out;

  &:hover {
    transition: 75ms ease-out;
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.grayed};
    color: ${(props) => props.theme.colors.grayed};
    text-shadow: 0px 0px 4px ${(props) => props.theme.colors.grayed};
    cursor: not-allowed;
    outline: 0px;
  }
`;

export const ErrorValidation = styled.div`
  width: max-content;
  padding: 3px 10px;
  position: absolute;
  right: 100%;
  bottom: 20%;
  z-index: 9999;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.accent};
  border: solid 1px ${(props) => props.theme.colors.tertiary};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1),
    inset 0px 0px 3px ${(props) => props.theme.colors.background};
  height: fit-content;
  ${(props) =>
    props.name &&
    css`
      right: calc(100% + 1.6rem);
    `}
  ${(props) =>
    props.stats &&
    css`
      top: 45%;
    `}

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 100%;
    border: solid transparent;
    height: 0;
    width: 0;
  }
  &:before {
    transform: rotate(180deg);
    border-right-color: ${(props) => props.theme.colors.tertiary};
    border-width: 8px;
    top: 10px;
    margin-top: -8px;
  }
  &:after {
    transform: rotate(180deg);
    border-right-color: ${(props) => props.theme.colors.secondary};
    border-width: 6px;
    top: 10px;
    margin-top: -6px;
  }
  ${(props) =>
    props.image &&
    css`
      right: unset;
      left: 100%;
      top: 72%;
      &:before,
      &:after {
        left: unset;
        right: 100%;
        transform: rotate(0deg);
      }
      &:before {
      }
      &:after {
      }
    `}
`;

export const SuccessMessageContainer = styled.div`
  ${WidgetA};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 18rem;
  width: 34rem;
`;

export const SuccessMessage = styled.label`
  font-size: 2.3rem;
  text-shadow: 1px 1px 1px ${(props) => props.theme.colors.accent};
`;

const ButtonB = css`
  ${WidgetA};
  font-size: 1.5rem;
  border-radius: 0.2rem;
  border: 0;
  font-family: signika;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  padding: 0.5rem;
  margin: 1.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const SuccessClose = styled.button`
  ${ButtonB};
  padding-left: 1rem;
  padding-right: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  `;

export const SuccessCreateNew = styled.button`
  ${ButtonB};
  position: absolute;
  width: 20rem;
  bottom: 0;
`;
