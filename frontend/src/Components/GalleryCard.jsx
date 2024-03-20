import React from "react";
import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';
const GalleryCard = ({data}) => {
  return (
    <div className="heroSwiper">
      <Slide direction="left" className="top-text">{data?.middle}
        </Slide>
        <Slide direction="down" className=" heading">{data?.top}</Slide>
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
    img: PropTypes.string,
    middle:PropTypes.string,
    top:PropTypes.string,
  })
};

GalleryCard.defaultProps = {
  data: {
    img: '',
    middle:'',
    top:'',
  }
};
export default GalleryCard;
