import React from "react";
import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';
const GalleryCard = ({data}) => {
  return (
    <div className="heroSwiper vampireWars">
      <Slide direction="left" className="heading masteryKindom">{data?.middle}
        </Slide>
        <Slide direction="down" className="top-text ">{data?.top}</Slide>
      <img
        src={data?.img}
        className="img-fluid"
        alt=""
      />
      <Slide direction="up" className="bottom-text"><button type="button" className="btn btn-outline-light btn-lg"><span>Explore</span></button></Slide>
    </div>
  );
};

GalleryCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string
  })
};

GalleryCard.defaultProps = {
  data: {
    img: ''
  }
};
export default GalleryCard;
