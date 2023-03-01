import styled, { css } from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const FilterContainer = styled.div`
  ${WidgetA};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 1rem;
`;

export const CheckboxesContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.1rem;
`;

export const SourceLabelCheckbox = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 0.5rem;
  gap: 0.5rem;
`;

export const SourceLabel = styled.label``;

export const SourceCheckbox = styled.input`
  transform: scale(125%);
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 26rem;
`;

export const Label = styled.img`
  width: 5.3rem;
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
