import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SkeletonIcon = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: var(--color-skeleton-icons);

  &:not(:last-child) {
    margin-right: 24px;
  }

  flex-shrink: 0;
`;