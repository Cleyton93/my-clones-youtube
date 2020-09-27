import React from 'react';

import { Container, SkeletonIcon } from './styles';

const LoadingNavbarIcons: React.FC = () => {
  return (
    <Container>
      <SkeletonIcon />
      <SkeletonIcon />
      <SkeletonIcon />
      <SkeletonIcon />
    </Container>
  );
};

export default LoadingNavbarIcons;