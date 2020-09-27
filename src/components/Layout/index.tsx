import React, { useContext, useState, useCallback, useEffect } from 'react';

import { Context } from '../../Context';

import { Container, Content } from './styles';

import Navbar from '../Navbar';
import LeftMenu from '../LeftMenu';
import Videos from '../Videos';

const Layout: React.FC = () => {
  const { toggleThemeMenu, setToggleThemeMenu } = useContext(Context);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const handleToggleThemeMenu = useCallback(() => {
    if (toggleThemeMenu) setToggleThemeMenu(false);
  }, [setToggleThemeMenu, toggleThemeMenu]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <Container onClick={handleToggleThemeMenu}>
      <Navbar isLoading={isLoading} />

      <Content>
        <LeftMenu isLoading={isLoading} />

        <Videos isLoading={isLoading} />
      </Content>
    </Container>
  );
};

export default Layout;