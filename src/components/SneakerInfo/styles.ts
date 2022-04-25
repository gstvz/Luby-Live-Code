import styled from "styled-components";

type ColorProp = {
  color: string;
};

export const Container = styled.div`
  flex: 1;
`;

export const SneakerTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.font_weight.w700};
`;

export const SneakerPrice = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font_weight.w400};
  margin-bottom: 2.5rem;
`;

export const SneakerColors = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

export const Color = styled.div<ColorProp>`
  background-color: ${({ color, theme }) =>
    color === "primary"
      ? theme.colors.sneaker_primary
      : color === "secondary"
      ? theme.colors.action_button
      : theme.colors.sneaker_secondary};
  border-radius: 10px;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
`;

export const SneakerInfo = styled.p`
  color: ${({ theme }) => theme.colors.text_default};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.font_weight.w500};
  margin-bottom: 2.8rem;
  max-width: 40rem;
`;

export const SneakerSizes = styled.div`
  margin-bottom: 3.4rem;
`;

export const Sizes = styled.ul`
  display: flex;
  gap: 5rem;
`;

export const Size = styled.li`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.font_weight.w500};
`;

export const DeliveryInfo = styled.div`
  margin-bottom: 2.4rem;
`;

export const DeliveryIconWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1.7rem;
`;

export const DeliveryIcon = styled.img`
  background-color: ${({ theme }) => theme.colors.round_button_bg};
  border-radius: 50%;
  padding: 1rem;
`;

export const DeliveryText = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.font_weight.w500};
`;

export const Actions = styled.div`
  display: flex;
  gap: 1.8rem;  
`;

export const CartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.action_button};
  border-radius: 10px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.font_weight.w700};
  padding: 1.8rem 5.8rem;
  margin-left: 8rem;
`;

export const FavButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.round_button_bg};
  border-radius: 50%;
  display: flex;
  padding: 1.5rem;
`;

export const HeartIcon = styled.img``;
