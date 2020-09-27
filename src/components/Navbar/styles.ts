import styled, { css } from 'styled-components';

import { Logo } from '../../MyIcons';
import {
  MdSearch,
  MdApps,
  MdMenu,
  MdVideoCall,
  MdNotifications,
  MdArrowBack,
} from 'react-icons/md';

export const Container = styled.nav`
  background-color: var(--color-navbar);
  
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;

  height: 56px;

  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-icons {
    display: flex;

    a {
      display: flex;
      width: 95px;
      height: 30px;

      position: relative;

      span {
        position: absolute;
        font-size: 10px;
        color: var(--color-tertiary);
        top: 0;
        right: 0;
      }
    }
  }

  .notifications {
    position: relative;
  }
`;

const iconsCSS = css`
  width: 24px;
  height: 24px;

  fill: var(--color-tertiary);

  flex-shrink: 0;

  margin-right: 24px;

  cursor: pointer;
`;

export const HamburguerIcon = styled(MdMenu)`
  ${iconsCSS}
`;

export const LogoIcon = styled(Logo)`
  width: 80px;
  height: 24px;

  fill: var(--color-logo);
`;

export const Search = styled.div`
  display: flex;
  height: 32px;

  input {
    width: 575px;
    height: 100%;
    padding: 10px;

    border-radius: 2px 0 0 2px;
    border-left: 1px solid var(--color-border-input);
    border-top: 1px solid var(--color-border-input);
    border-bottom: 1px solid var(--color-border-input);
    background-color: var(--color-input);

    &::placeholder {
      font-size: 16px;
      color: var(--color-text);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 65px;
    border-radius: 0 2px 2px 0;

    background-color: var(--color-btn-search);
    border: 1px solid var(--color-border-input);

    &:focus, &:hover {
      background-color: var(--color-btn-search-hover);
    }

    &:hover {
      > svg {
        fill: var(--color-tertiary);
      }
    }
  }
`;

export const SearchIcon = styled(MdSearch)`
  width: 20px;
  height: 20px;

  fill: var(--color-border-input);
`;

export const Options = styled.ul`
  display: flex;
  align-items: center;
`;

export const SendVideoIcon = styled(MdVideoCall)`
  ${iconsCSS}
`;

export const NotificationsIcon = styled(MdNotifications)`
  ${iconsCSS}
`;

export const AppsIcon = styled(MdApps)`
  ${iconsCSS}
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: #606060;

  cursor: pointer;
`;

export const NotificationAlert = styled.div`
  width: 18px;
  height: 18px;

  border-radius: 50%;
  background-color: #CC0000;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -3px;
  right: 16px;

  > span {
    font-size: 10px;
    color: var(--color-white);
  }
`;

export const ThemeMenu = styled.div`
  position: fixed;
  top: 50px;
  right: 16px;

  width: 298px;
  background-color: var(--color-primary);

  border: 1px solid var(--color-separator);

  .header-theme-menu {
    height: 49px;
    padding: 12px;

    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .body-theme-menu {
    display: flex;
    flex-direction: column;
    padding: 12px;

    > span {
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 21px;
    }

    .toggle-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        color: #606060;
      }
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;

  background-color: var(--color-separator);
`;

export const ArrowLeftIcon = styled(MdArrowBack)`
  ${iconsCSS}
`;

interface PropsToggleTheme {
  theme: 'white' | 'dark';
};

export const ToggleTheme = styled.div<PropsToggleTheme>`
  width: 36px;
  height: 14px;

  position: relative;

  background-color: var( --color-checkbox-toggle-theme);

  border-radius: 10px;

  &:before {
    content: '';
    background-color: var(--color-circle-checkbox-toggle-theme);

    box-shadow: 0 0 2px #000;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    position: absolute;
    ${({ theme }) => theme === 'white' ? 'left: 0' : 'right: 0'};
    top: -3px;
  }
`;

