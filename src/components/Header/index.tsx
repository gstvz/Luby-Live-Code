import { Logo, Notification } from "@assets";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.Logo src={Logo} />
          <S.Nav>
            <S.NavMenu>
              <S.MenuItem>MENS</S.MenuItem>
              <S.MenuItem>WOMENS</S.MenuItem>
              <S.MenuItem>BEST</S.MenuItem>
              <S.MenuItem>COLLECTION</S.MenuItem>
            </S.NavMenu>
          </S.Nav>
        </S.Wrapper>
        <S.NotificationsWrapper>
          <S.NotificationIcon src={Notification} />
          <S.NotificationText>NOTIFICATIONS</S.NotificationText>
        </S.NotificationsWrapper>
      </S.Container>
    </S.Header>
  );
};
