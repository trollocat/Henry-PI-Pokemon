import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  // 1:√2 is the typical aspect ratio for cards
  aspect-ratio: 1/1.41421356237;
  height: 15rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;
