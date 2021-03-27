import { useState } from "react";
import { animated } from 'react-spring';
import Image from "next/image";
import { createBreakpoint } from 'react-use';
import useAnimations from '../../hooks/useAnimations';
import FigureStyled from "./FigureStyled";
import Share from "../icons/Share";
import Facebook from '../icons/Facebook';
import Pinterest from '../icons/Pinterest';
import Twitter from '../icons/Twitter';

const useBreakpoint = createBreakpoint({ Tablet: 900, Mobile: 350 });

const Figure = () => {
  // Active state
  const [active, setActive] = useState(false);
  // Breakpoint/Responsiveness
  const breakpoint = useBreakpoint();
  const isTablet = breakpoint === 'Tablet';
  // Animations
  const { arrowSpring, socialSpring } = useAnimations(isTablet, active);
  // Click handler
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <FigureStyled active={active}>
      <figure>
        <Image
          className="drawers"
          src="/drawers.jpg"
          alt="Photograph of green, rustic drawers"
          width={326}
          height={200}
        />
        <figcaption>
          <h4>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h4>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="user-info">
            <Image
              className="profile-img"
              src="/avatar-michelle.jpg"
              alt="Profile picture"
              height={40}
              width={40}
            />
            <div className="info-container">
              <h5 className="name">Michelle Appleton</h5>
              <div className="date">28 Jun 2020</div>
            </div>
            <div onClick={handleClick} className="icon-container">
              <Share />
            </div>
          </div>
          <animated.div className="social-info" style={socialSpring}>
            <div className="share-container">
              <span className="share-label">
                SHARE
              </span>
              <Facebook className="share-icon facebook" />
              <Twitter className="share-icon twitter" />
              <Pinterest className="share-icon pinterest" />
            </div>
            {!isTablet && (
              <div onClick={handleClick} className="icon-container">
                <Share />
              </div>
            )}
            {isTablet && (
              <animated.div className="down-arrow" style={arrowSpring} />
            )}
          </animated.div>
        </figcaption>
      </figure>
    </FigureStyled>
  );
};

export default Figure;
