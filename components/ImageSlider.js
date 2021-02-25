import React from 'react';
import { Row, Col, Carousel } from 'antd';

const ImageSlider = ({ slice}) => {

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    cssEase: "linear"
  };

  return (
  
  <Carousel {...settings}>
    {slice.items.map((item, index) => (
        <Image item={item} key={index} />
    ))}
    </Carousel>
  )
}
 
  const Image = ({ item }) => (
    <img src={item.carousel_image.url} />
  )
  
  export default ImageSlider