/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { Context } from '../../Context';

import {
  Container,
  ThumbContainer,
  VideoData,
  Channel,
  MoreVertIcon,
} from './styles';

import Thumb from '../Thumb';
import LoadingThumb from '../Skeleton/LoadingThumb';

interface Props {
  isLoading: boolean;
};

const Videos: React.FC<Props> = ({ isLoading }) => {
  const { toggleMenu } = useContext(Context);

  return useMemo(() => {
    if (isLoading) {
      return (
        <Container toggleMenu={true}>
          <LoadingThumb />
        </Container>
      );
    }

    return (
      <Container toggleMenu={toggleMenu}>
        <List />
      </Container>
    );
  }, [isLoading, toggleMenu]);
};

const List: React.FC = () => {
  return useMemo(() => {
    return (
      <>
        {Array.from(Array(50)).map((_, i) =>
          <ThumbContainer href="#" key={uuid()}>
            <Thumb bgColor="--color-thumb" />

            <VideoData>
              <div>
                <Channel />
                <div className="description">
                  <span>Youtube clone</span>
                </div>
                <MoreVertIcon className="more-vert" />
              </div>
              <div>
                <span className="channel-name">Canal {++i}</span>
                <span className="views">
                  {Math.round(Math.random() * 50)} mil visualizaçãoes
                </span>
                <span className="start-time">
                  há {Math.ceil(Math.random() * 22)} horas
                </span>
              </div>
            </VideoData>
          </ThumbContainer>
        )}
      </>
    );
  }, []);
};

export default Videos;