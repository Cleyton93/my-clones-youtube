import styled from 'styled-components';

interface Props {
  currentWidth: number;
  bgColor: string;
};

export const Container = styled.div<Props>`
  width: 100%;
  min-width: 252px;
  height: ${({ currentWidth }) => currentWidth / 1.8 + 'px'};
  min-height: 142px;

  background-color: ${({ bgColor }) => `var(${bgColor})`};
`;