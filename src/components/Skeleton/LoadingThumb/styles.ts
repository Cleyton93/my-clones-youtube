import styled from 'styled-components';

export const ThumbContainer = styled.div`
  margin-bottom: 41px;
`;

export const VideoData = styled.div`
  margin-top: 15px;

  position: relative;
  display: flex;
  align-items: start;
`;

export const SkeletonChannel = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;

  margin-right: 12px;

  border-radius: 50%;

  background-color: var(--color-skeleton-icons);
`;

export const SkeletonLines = styled.div`
  margin-right: 12px;
  width: 100%;

  > div {
    height: 25px;

    border-radius: 2px;

    background-color: var(--color-skeleton-icons);
    
    &.first-line {
      width: 90%;
      margin-bottom: 10px;
    }

    &.last-line {
      width: 60%;
    }
  }
`;
