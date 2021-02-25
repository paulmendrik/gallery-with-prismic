import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Row, Col } from 'antd';
import Navigation from '../components/Navigation';
import { client } from '../prismic-configuration';

export default function Contact({contact}) {
    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">{RichText.asText(contact.data.title)}</h1>
        </div>
        <Row gutter={16} className="contact" > 
        <Col xs={24} sm={10} span={10}>
        <img  src={contact.data.image.url} alt={contact.title} />  
        </Col>
        <Col xs={24} sm={14} span={14}>
        {RichText.render(contact.data.content)}
        </Col>
        </Row>
        </Col>
        </Row>
        </>
    )

}

export async function getServerSideProps() {
  const contact = await client.getSingle('contact')

  return { props: { contact } }
}