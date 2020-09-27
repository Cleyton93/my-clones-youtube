/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useCallback, useMemo } from 'react';

import { Context } from '../../Context';

import LoadingNavbarIcons from '../Skeleton/LoadingNavbarIcons';

import {
  Container,
  HamburguerIcon,
  LogoIcon,
  Search,
  SearchIcon,
  Options,
  SendVideoIcon,
  NotificationsIcon,
  AppsIcon,
  Avatar,
  NotificationAlert,
  ThemeMenu,
  ArrowLeftIcon,
  ToggleTheme,
  Separator,
} from './styles';

interface Props {
  isLoading: boolean;
};

const Navbar: React.FC<Props> = ({ isLoading }) => {
  const {
    toggleMenu,
    setToggleMenu,
    toggleThemeMenu,
    setToggleThemeMenu,
    theme,
    setTheme,
  } = useContext(Context);

  const handleToggleMenu = useCallback(() => {
    setToggleMenu(!toggleMenu);
  }, [setToggleMenu, toggleMenu]);

  const handleToggleThemeMenu = useCallback(() => {
    setToggleThemeMenu(!toggleThemeMenu);
  }, [setToggleThemeMenu, toggleThemeMenu]);

  const handleChangeTheme = useCallback(() => {
    switch(theme) {
      case 'white':
        setTheme('dark');
        window.localStorage.setItem('youtube-theme', 'dark');
      break;
      case 'dark':
        setTheme('white');
        window.localStorage.setItem('youtube-theme', 'white');
      break;
      default:
        setTheme('white');
        window.localStorage.setItem('youtube-theme', 'white');
    }
  }, [setTheme, theme]);

  return useMemo(() => {
    return (
      <Container>
        <div className="left-icons">
          <HamburguerIcon onClick={handleToggleMenu} />
  
          <a href="#" title="Página inicial do YouTube">
            <LogoIcon />
            <span>BR</span>
          </a>
        </div>

        {
          !isLoading ? (
            <>
              <Search>
                <input type="text" name="search" placeholder="Pesquisar" />
                <button>
                  <SearchIcon />
                </button>
              </Search>

              <Options>
                <li>
                <SendVideoIcon />
                </li>
                <li>
                  <AppsIcon />
                </li>
                <li className="notifications">
                  <NotificationsIcon />
                  <NotificationAlert><span>2</span></NotificationAlert>
                </li>
                <li>
                  {
                    toggleThemeMenu && 
                    <ThemeMenu>
                      <div className="header-theme-menu">
                        <ArrowLeftIcon onClick={handleToggleThemeMenu} />
                        <span>Tema escuro</span>
                      </div>
        
                      <Separator />
        
                      <div className="body-theme-menu">
                        <span>
                          O Tema escuro escurece as partes claras da página para 
                          otimizar a experiência noturna. Confira!
                        </span>
                        <span>
                          A configuração do Tema escuro será aplicada somente a 
                          este navegador.
                        </span>
                        <div className="toggle-container">
                          <span>Tema escuro</span>
                          <ToggleTheme
                            theme={theme}
                            onClick={handleChangeTheme}
                          />
                        </div>
                      </div>
                    </ThemeMenu>
                  }
                  <Avatar onClick={handleToggleThemeMenu} />
                </li>
              </Options>
            </>
          ) : 
          <LoadingNavbarIcons />
        }
      </Container>
    );
  }, [handleChangeTheme, handleToggleMenu, handleToggleThemeMenu, isLoading, theme, toggleThemeMenu]);
};

export default Navbar;