import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  useContext
} from 'react';

import { Context } from '../../Context';

import { Container } from './styles';

interface Props {
  bgColor: string;
};

const Thumb: React.FC<Props> = ({ bgColor }) => {
  const [currentWidth, setCurrentWidth] = useState<number>(142);
  const { toggleMenu } = useContext(Context);

  const element = useRef<HTMLDivElement>(null);

  const handleSetCurrentWidth = useCallback(() => {
    if (element.current) {
      setCurrentWidth(element.current.offsetWidth);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleSetCurrentWidth);

    return () =>
      window.removeEventListener('resize', handleSetCurrentWidth);
  }, [handleSetCurrentWidth]);

  useEffect(() => {
    handleSetCurrentWidth();
  }, [handleSetCurrentWidth, toggleMenu]);

  return (
    <Container currentWidth={currentWidth} bgColor={bgColor} ref={element} />
  );
};

export default Thumb;