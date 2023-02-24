import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 33rem 4rem 33rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 2.5rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 4px 0px ${(props) => props.theme.colors.accent},
    0px 0px 8px -5px ${(props) => props.theme.colors.text};
`;
