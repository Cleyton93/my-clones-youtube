import styled, { css } from 'styled-components';

import { MdFire, YoutubeLive, Idea } from '../../MyIcons';
import { SiYoutubegaming, SiYoutube } from 'react-icons/si';
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdSlideshow,
  MdWatchLater,
  MdThumbUp,
  MdExpandMore,
  MdLocalMovies,
  MdSettings,
  MdFlag,
  MdHelp,
  MdFeedback,
} from 'react-icons/md';

interface PropsToggleMenu {
  toggleMenu: boolean;
};

export const Container = styled.div<PropsToggleMenu>`
  background-color: var(--color-primary);

  width: ${({ toggleMenu }) => toggleMenu ? '240px' : '72px' };
  height: calc(100% - 56px);

  padding: 12px 0;

  position: fixed;
  top: 56px;
  bottom: 0;

  ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-primary);
  }

  .title {
    font-size: 14px;
    padding: 0 24px 8px 24px;
    font-weight: 500;
    color: #AAAAAA;
  }
`;

export const Item = styled.li`
  width: 100%;

  display: flex;
  align-items:  center;

  a {
    margin-bottom: 1px;
    padding: 8px 24px;
    width: 100%;
    font-size: 14px;

    &.small-menu {
      font-size: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 74px;
      margin: 0;

      > svg {
        margin-right: 0;
      }
    }

    > div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    display: flex;
    align-items: center;
    color: inherit;
  }

  &.active {
    > a {
      background-color: var(--color-left-menu-active);

      &.small-menu {
        background-color: transparent;

        span {
          color:  var(--color-icons-menu-left-active);
        }

        &:hover {
          background-color: var(--color-left-menu-hover);
        }
      }

      span {
        font-weight: bold;
      }

      > svg {
        fill: var(--color-icons-menu-left-active);
      }
    }
  }

  &:hover {
    a {
      background-color: var(--color-left-menu-hover);
    }
  }
`;

const iconsCSS = css`
  width: 24px;
  height: 24px;

  fill: var(--color-icons-menu-left);

  margin-right: 24px;

  cursor: pointer;
`;


export const Separator = styled.div`
  width: 100%;
  height: 1px;

  margin: 12px 0;

  background-color: var(--color-separator);
`;

export const HomeIcon = styled(MdHome)`
  ${iconsCSS}
`;

export const FireIcon = styled(MdFire)`
  ${iconsCSS}
`;

export const SubsIcon = styled(MdSubscriptions)`
  ${iconsCSS}
`;

export const VideoLibIcon = styled(MdVideoLibrary)`
  ${iconsCSS}
`;

export const HistoryIcon = styled(MdHistory)`
  ${iconsCSS}
`;

export const YourVideosIcon = styled(MdSlideshow)`
  ${iconsCSS}
`;

export const WatchLaterIcon = styled(MdWatchLater)`
  ${iconsCSS}
`;

export const LikeIcon = styled(MdThumbUp)`
  ${iconsCSS}
`;

export const ExpandMoreIcon = styled(MdExpandMore)`
  ${iconsCSS}
`;

export const Channel = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background-color: #606060;

  margin-right: 24px;

  cursor: pointer;
`;

export const YoutubeIcon = styled(SiYoutube)`
  ${iconsCSS}
`;

export const MoviesIcon = styled(MdLocalMovies)`
  ${iconsCSS}
`;

export const GamesIcon = styled(SiYoutubegaming)`
  ${iconsCSS}
`;

export const LiveIcon = styled(YoutubeLive)`
  ${iconsCSS}
`;

export const IdeaIcon = styled(Idea)`
  ${iconsCSS}
`;

export const SettingsIcon = styled(MdSettings)`
  ${iconsCSS}
`;

export const DenunciationsIcon = styled(MdFlag)`
  ${iconsCSS}
`;

export const HelpIcon = styled(MdHelp)`
  ${iconsCSS}
`;

export const FeedbackIcon = styled(MdFeedback)`
  ${iconsCSS}
`;

export const MoreInformations = styled.li`
  display: flex;
  flex-direction: column;

  padding: 0 24px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 32px;
  }

  > a {
    font-size: 13px;
    line-height: 18px;
    font-weight: 500;
    color: #606060;
  }
`;

export const Copyright = styled.li`
  padding: 0 24px;
  margin-bottom: 12px;

  font-size: 13px;
  line-height: 18px;

  > span {
    color: #909090;
  }
`;