import React from 'react';
import { Row, Col, Carousel } from 'antd';

const Slider = ({ slice}) => {

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
   <Row>
  <Col span={24} className="slider">
  <Carousel {...settings}>
    {slice.items.map((item, index) => (
        <GalleryItem item={item} key={index} />
    ))}
    </Carousel>
    </Col>
    </Row> 
  )
}
 

  const GalleryItem = ({ item }) => (
    <img src={item.image.clipped.url} />
  )
  
  export default Slider