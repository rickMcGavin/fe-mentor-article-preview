import { useRef } from 'react';
import { useSpring, useChain } from "react-spring";

const useAnimations = (isTablet, active) => {
  const socialRef = useRef();
  // These ternaries within ternaries are kind of crazy to read, but they work.
  const socialSpring = useSpring({
    ref: socialRef,
    config: { tension: 500, friction: 16, clamp: !isTablet && !active || isTablet },
    from: {
      maxHeight: `0px`,
      padding: `0px 0px`,
      overflow: `hidden`
    },
    transform: !isTablet ? active ? `translate(0px, 0px)` : `translate(0px, 64px)` : `translate(0px, 0px)`,
    maxHeight: isTablet ? active ? `55px` : `0px` : `64px`,
    padding: isTablet ? active ? `16px 32px` : `0px 32px` : `16px 32px`,
    overflow: isTablet ? active ? `visible` : `hidden` : `hidden`
  });

  const arrowRef = useRef();
  const arrowSpring = useSpring({
    ref: arrowRef,
    config: { tension: 300, friction: 13, clamp: !active },
    transform: isTablet ? active ? `translateY(12px)` : `translateY(0px)` : `translateY(0px)`
  });

  useChain(active ? [socialRef, arrowRef] : [arrowRef, socialRef]);

  return {
    socialSpring,
    arrowSpring
  }
}

export default useAnimations;
