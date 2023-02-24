import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 5rem 30rem 5rem 30rem;
    `

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.primary}
`;
