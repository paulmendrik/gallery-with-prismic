import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Row, Col } from 'antd';
import Navigation from '../components/Navigation';
import { client } from '../prismic-configuration';



export default function About({about}) {
    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">{RichText.asText(about.data.title)}</h1>
        </div>
        <Col span={24} className="about"> 
        <img  src={about.data.image.url} alt={about.title} />  
        {RichText.render(about.data.content)}
        </Col>
        </Col>
        </Row>
        </>
    )

}

export async function getServerSideProps() {
  const about = await client.getSingle('about')

  return { props: { about } }
}