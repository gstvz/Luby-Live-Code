import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  return <S.Main>{children}</S.Main>;
};
