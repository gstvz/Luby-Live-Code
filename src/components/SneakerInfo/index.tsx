import { DeliveryTruck, HeartIcon } from "@assets";
import * as S from "./styles";

export const SneakerInfo = () => {
  return (
    <S.Container>
      <S.SneakerTitle>ADIDAS</S.SneakerTitle>
      <S.SneakerPrice>$100</S.SneakerPrice>
      <S.SneakerColors>
        <S.Color color="primary" />
        <S.Color color="secondary" />
        <S.Color color="default" />
      </S.SneakerColors>
      <S.SneakerInfo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </S.SneakerInfo>
      <S.SneakerSizes>
        <S.Sizes>
          <S.Size>7</S.Size>
          <S.Size>8</S.Size>
          <S.Size>9</S.Size>
          <S.Size>10</S.Size>
          <S.Size>11</S.Size>
          <S.Size>12</S.Size>
          <S.Size>13</S.Size>
        </S.Sizes>
      </S.SneakerSizes>
      <S.DeliveryInfo>
        <S.DeliveryIconWrapper>
          <S.DeliveryIcon src={DeliveryTruck} />
          <S.DeliveryText>Free delivery all over Pakistan</S.DeliveryText>
        </S.DeliveryIconWrapper>
      </S.DeliveryInfo>
      <S.Actions>
        <S.CartButton>
          ADD TO CART
        </S.CartButton>
        <S.FavButton>
          <S.HeartIcon src={HeartIcon} />
        </S.FavButton>
      </S.Actions>
    </S.Container>
  );
};
