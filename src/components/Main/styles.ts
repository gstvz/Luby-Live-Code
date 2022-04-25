import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 8.5rem);
  width: 100%;
`;
