import React from 'react';
import Link from 'next/link';
import { Row, Col,Button } from 'antd';
import Navigation from '../../components/Navigation';
import { RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';



const Article = ({ article }) => (
        <>
        <Navigation/>
        <Row justify="center">
        <Col xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">Press</h1>
        </div>
        <Col span={24} className="press">
        <img src="/press.svg" width={540} height={540} alt="press" className="press"/> 
        <h2>{RichText.asText(article.data.title)}</h2>
        <h3>{RichText.asText(article.data.publication)}</h3>
        {RichText.render(article.data.intro)}
        {RichText.render(article.data.main)}
        <Button><Link href="/press"><a>Back</a></Link></Button>
        </Col>
        </Col>
        </Row>
        </>
)

export async function getServerSideProps({ query }) {
  const article = await client.getByUID('press', query.uid)
  
  return { props: { article } }
  }
  
  export default Article