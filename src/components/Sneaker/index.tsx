import { Arrow, SneakerImg } from "@assets";
import * as S from "./styles";

export const Sneaker = () => {
  return (
    <S.Container>
      <S.ActionWrapper>
        <S.BackButton>
          <S.ArrowIcon src={Arrow} />
          <S.ActionButtonText>COLOUR / SIZE / BRAND</S.ActionButtonText>
        </S.BackButton>
      </S.ActionWrapper>
      <S.SneakerWrapper>
        <S.Sneaker src={SneakerImg} />
      </S.SneakerWrapper>
    </S.Container>
  );
};
