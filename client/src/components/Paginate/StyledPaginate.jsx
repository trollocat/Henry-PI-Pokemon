import styled from "styled-components";

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const PageNumber = styled.label`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const PageArrowButton = styled.button`
  padding: 0;
  margin: 0;
`;
