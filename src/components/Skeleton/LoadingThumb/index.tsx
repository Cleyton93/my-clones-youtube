import React from 'react';
import { v4 as uuid } from 'uuid';

import Thumb from '../../Thumb';

import {
  ThumbContainer,
  VideoData,
  SkeletonChannel,
  SkeletonLines,
} from './styles';

const LoadingThumb: React.FC = () => {
  return (
    <>
      {Array.from(Array(50)).map((_, i) =>
        <ThumbContainer key={uuid()}>
          <Thumb bgColor="--color-thumb-skeleton" />

          <VideoData>
            <SkeletonChannel />

            <SkeletonLines>
              <div className="first-line" />
              <div className="last-line"/>
            </SkeletonLines>
          </VideoData>
        </ThumbContainer>
      )}
    </>
  );
};

export default LoadingThumb;