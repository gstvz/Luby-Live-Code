import styled from "styled-components";

export const Container = styled.div``;

export const ActionWrapper = styled.div``;

export const BackButton = styled.button`
  background: none;
  display: flex;
  gap: 2.8rem;
`;

export const ArrowIcon = styled.img`
  width: 2.5rem;
`;

export const ActionButtonText = styled.p`
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font_weight.w500};
`;

export const SneakerWrapper = styled.div`
  height: 50rem;
  width: 50rem;
`;

export const Sneaker = styled.img`
  height: 100%;
  width: 100%;
`;
