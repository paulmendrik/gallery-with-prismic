import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import { Row, Col, Button } from 'antd';
import Navigation from '../../components/Navigation';
import { client, linkResolver, hrefResolver } from '../../prismic-configuration';

const Press = ( {page} ) => (
    <>
    <Navigation/>
    <Row justify="center">
    <Col xs={20} sm={22} span={20}>
    <div>
    <h1 className="title">Press</h1>
    </div>
    <Row gutter={16} className="press">
    <>
    <Col xs={24} sm={10} span={10}>
    <img src="/press.svg" width={540} height={540} alt="press" className="press"/> 
    </Col> 
    <Col xs={24} sm={14} span={14} className="press">
    {page.results.map((press,index) =>  (
      <div className="article" key={index}>
      <h2>{RichText.asText(press.data.title)}</h2>
      <h3>{RichText.asText(press.data.publication)}</h3>
      <p>{RichText.asText(press.data.intro)}</p>
      <Button><Link href={hrefResolver(press)} as={linkResolver(press)}>Read More</Link></Button>
      </div>
    ))}
    </Col>  
    </>
    </Row>
    </Col>
    </Row>
   </>
)



export async function getServerSideProps() {
  const page = await client.query(
    Prismic.Predicates.at('document.type', 'press'),
    { orderings: '[my.press.date desc]' }
  )

  return { props: { page } }
}

export default Press