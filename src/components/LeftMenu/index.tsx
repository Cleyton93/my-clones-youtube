/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { Context } from '../../Context';

import {
  Container,
  Item,
  Separator,
  HomeIcon,
  FireIcon,
  SubsIcon,
  VideoLibIcon,
  HistoryIcon,
  YourVideosIcon,
  WatchLaterIcon,
  LikeIcon,
  ExpandMoreIcon,
  Channel,
  YoutubeIcon,
  MoviesIcon,
  GamesIcon,
  LiveIcon,
  IdeaIcon,
  SettingsIcon,
  DenunciationsIcon,
  HelpIcon,
  FeedbackIcon,
  MoreInformations,
  Copyright,
} from './styles';

interface Props {
  isLoading: boolean;
};

const LeftMenu: React.FC<Props> = ({ isLoading }) => {
  const { toggleMenu } = useContext(Context);

  return useMemo(() => {
    if (isLoading) return <Container toggleMenu={true} />

    return (
      <Container toggleMenu={toggleMenu}>
        <ul>
          <Item className="active" title="Início">
            <a href="#" className={!toggleMenu ? 'small-menu' : ''}>
              <HomeIcon />
  
              <div>
                <span>Início</span>
              </div>
            </a>
          </Item>
          <Item title="Em alta">
            <a href="#" className={!toggleMenu ? 'small-menu' : ''}>
              <FireIcon />
  
              <div>
                <span>Em alta</span>
              </div>
            </a>
          </Item>
          <Item title="Inscrições">
            <a href="#" className={!toggleMenu ? 'small-menu' : ''}>
              <SubsIcon />
  
              <div>
                <span>Inscrições</span>
              </div>
            </a>
          </Item>
  
          {
            toggleMenu &&
            <li>
              <Separator />
            </li>
          }
  
          <Item title="Biblioteca">
            <a href="#" className={!toggleMenu ? 'small-menu' : ''}>
              <VideoLibIcon />
              
              <div>
                <span>Biblioteca</span>
              </div>
            </a>
          </Item>
  
          {
            toggleMenu &&
            <> 
              <Item title="Histórico">
              <a href="#">
                <HistoryIcon />
  
                <div>
                  <span>Histórico</span>
                </div>
              </a>
              </Item>
              <Item title="Seus videos">
              <a href="#">
                <YourVideosIcon />
  
                <div>
                  <span>Seus videos</span>
                </div>
              </a>
              </Item>
              <Item title="Assistir mais tarde">
                <a href="#">
                  <WatchLaterIcon />
  
                  <div>
                    <span>Assistir mais tarde</span>
                  </div>
                </a>
              </Item>
              <Item title="Videos marcados como gostei">
                <a href="#">
                  <LikeIcon />
  
                  <div>
                    <span>Videos marcados como gostei</span>
                  </div>
                </a>
              </Item>
              <Item title="Mostrar mais">
                <a href="#">
                  <ExpandMoreIcon />
  
                  <div>
                    <span>Mostrar mais</span>
                  </div>
                </a>
              </Item>
  
              <li>
                <Separator />
              </li>
  
              <li>
                <h3 className="title">INSCRIÇÕES</h3>
              </li>
  
              {Array.from(Array(7)).map((_, i) => 
                <Item key={uuid()} title={`Canal ${++i}`}>
                  <a href="#">
                    <Channel />
  
                    <div>
                      <span>Canal {i}</span>
                    </div>
                  </a>
                </Item>
              )}
  
              <Item title="Mostrar mais 12">
                <a href="#">
                  <ExpandMoreIcon />
  
                  <div>
                    <span>Mostrar mais 12</span>
                  </div>
                </a>
              </Item>
  
              <li>
                <Separator />
              </li>
  
              <li>
                <h3 className="title">MAIS DO YOUTUBE</h3>
              </li>
  
              <Item title="YouTube Premium">
                <a href="#">
                  <YoutubeIcon />
  
                  <div>
                    <span>YouTube Premium</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Filmes">
                <a href="#">
                  <MoviesIcon />
  
                  <div>
                    <span>Filmes</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Jogos">
                <a href="#">
                  <GamesIcon />
  
                  <div>
                    <span>Jogos</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Ao Vivo">
                <a href="#">
                  <LiveIcon />
  
                  <div>
                    <span>Ao vivo</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Aprender">
                <a href="#">
                  <IdeaIcon />
  
                  <div>
                    <span>Aprender</span>
                  </div>
                </a>
              </Item>
              
              <li>
                <Separator />
              </li>
  
              <Item title="Configurações">
                <a href="#">
                  <SettingsIcon />
  
                  <div>
                    <span>Configurações</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Histórico de denúncias">
                <a href="#">
                  <DenunciationsIcon />
  
                  <div>
                    <span>Histórico de denúncias</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Ajuda">
                <a href="#">
                  <HelpIcon />
  
                  <div>
                    <span>Ajuda</span>
                  </div>
                </a>
              </Item>
  
              <Item title="Enviar feedback">
                <a href="#">
                  <FeedbackIcon />
  
                  <div>
                    <span>Enviar feedback</span>
                  </div>
                </a>
              </Item>
              
              <li>
                <Separator />
              </li>
  
              <MoreInformations>
                <a href="#">
                  Sobre Imprensa
                </a>
                <a href="#">
                  Direitos autorais
                </a>
                <a href="#">
                  Entre em contato
                </a>
                <a href="#">
                  Criadores de conteúdo
                </a>
                <a href="#">
                  Publicidade
                </a>
                <a href="#">
                  Desenvolvedores
                </a>
              </MoreInformations>
  
              <MoreInformations>
                <a href="#">
                  Termos Privacidade
                </a>
                <a href="#">
                  Política e Segurança
                </a>
                <a href="#">
                  Como funciona o YouTube
                </a>
                <a href="#">      
                  Testar os novos recursos
                </a>
              </MoreInformations>
  
              <Copyright>
                <span>&copy; 2020 Google LLC</span>
              </Copyright>
            </>
          }
        </ul>
      </Container>
    );
  }, [isLoading, toggleMenu]);
};

export default LeftMenu;