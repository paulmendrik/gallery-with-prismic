import React from 'react';
import { Row, Col } from 'antd';
import { RichText } from 'prismic-reactjs';

const Images = ({ slice}) => {

  return (
    
    <Row className="gallery">
    {slice.items.map((item, index) => (
        <Image item={item} key={index} />
    ))}
    </Row> 
    
  )
}
 

const Image = ({ item }) => (
  <>
  <Col xs={24} sm={8} span={8}> 
  <figure className="image is-1by1">
  <a href={item.large.url} data-fancybox="images" >
  <img src={item.image.url} />
  <figcaption>
  <RichText render={item.caption} />
  </figcaption>
  </a>
  </figure>
  </Col>
  </>
)
  
  export default Images