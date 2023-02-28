import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const MainContainer = styled.div`
  margin-top: 2.2rem;
  width: 55rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 2.5rem;
  ${WidgetA}
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LoadingText = styled.h2`
  text-align: center;
  padding: 0;
  font-family: Geometos;
`;

export const LoadingGIF = styled.img``;
