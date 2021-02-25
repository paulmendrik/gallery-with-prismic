import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Row, Col, Carousel } from 'antd';
import Navigation from '../components/Navigation';
import SliceZone from '../components/SliceZone'
import { client } from '../prismic-configuration';


export default function About({ exhibitions }) {

    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">Exhibitions</h1>
        </div>
        <Col span={24}> 
        <Row gutter={24}>
        <Col span={10} className="exhibitions">
        <img  src={exhibitions.data.image.url} alt={exhibitions.data.title} /> 
        <h2>The Great Barn</h2>
        <SliceZone sliceZone={exhibitions.data.body} />  
        </Col>
        <Col span={14} className="exhibitions">
        {RichText.render(exhibitions.data.intro)}
        {RichText.render(exhibitions.data.exhibitions)}
        </Col>
        </Row>
        </Col>
        </Col>
        </Row>
        </>
    )

}

export async function getServerSideProps() {
  const exhibitions = await client.getSingle('exhibitions')

  return { props: { exhibitions } }
}