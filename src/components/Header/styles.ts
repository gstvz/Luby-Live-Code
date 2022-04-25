import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header_bg};
  height: 8.5rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 26rem;
  justify-content: space-between;
  height: 100%;
`;

export const Logo = styled.img`
  height: 5rem;
  width: 5rem;
`;

export const Nav = styled.nav``;

export const NavMenu = styled.ul`
  display: flex;
  gap: 5rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font_weight.w500};
`;

export const NotificationsWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 1.7rem;
`;

export const NotificationIcon = styled.img`
  height: 3.3rem;
  width: 3.3rem;
`;

export const NotificationText = styled.p`
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font_weight.w500};
`;
