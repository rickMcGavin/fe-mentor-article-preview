import Image from "next/image";
import FigureStyled from "./FigureStyled";
import Share from '../icons/Share';

const Figure = () => (
  <FigureStyled>
    <figure>
      <Image
        className="drawers"
        src="/drawers.jpg"
        alt="Photograph of green, rustic drawers"
        width={327}
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
          <div className="icon-container">
            <Share />
          </div>
        </div>
      </figcaption>
    </figure>
  </FigureStyled>
);

export default Figure;
