import styled from 'styled-components';

import { MdMoreVert } from 'react-icons/md';

interface PropsContainer {
  toggleMenu: boolean;
};

export const Container = styled.div<PropsContainer>`
  width: ${
    ({ toggleMenu }) => toggleMenu ? 'calc(100% - 240px)' : 'calc(100% - 72px)'
  };

  margin-left: ${({ toggleMenu }) => toggleMenu ? '240px' : '72px'};

  height: 100%;
 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;

  padding: 24px;
`;

export const ThumbContainer = styled.a`
  margin-bottom: 41px;

  &:hover {
    .more-vert {
      display: inline-block;
    }
  }
`;

export const VideoData = styled.div`
  margin-top: 15px;

  > div:first-child {
    position: relative;
    display: flex;
    align-items: start;

    .description {
      margin-right: 12px;
      width: 100%; 

      height: 36px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;

      > span {
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    margin: 0px 12px 0 48px;
    font-size: 14px;
    line-height: 18px;
  
    .channel-name, .views, .start-time {
      color: var(--color-text-thumb);
    }
  }
`;

export const Channel = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;

  margin-right: 12px;

  border-radius: 50%;

  background-color: #606060;
`;

export const MoreVertIcon = styled(MdMoreVert)`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 0;
  top: 0;

  fill: var(--color-text-thumb);

  display: none;
`;