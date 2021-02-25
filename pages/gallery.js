import React from "react";
import Head from 'next/head';
import { Row, Col } from 'antd';
import Navigation from '../components/Navigation';
import SliceZone from '../components/SliceZone';
import { client } from '../prismic-configuration';



export default function Gallery({ gallery }) {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"/>
    <script   src="https://code.jquery.com/jquery-3.5.1.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
    <script id="gallery" type="text/javascript" src="/static/script.js"></script>
    </Head>
    <Navigation/>
    <Row justify="center" >
    <Col xs={20} sm={22} span={20}>
    <div>
    <h1 className="title">Gallery</h1>
    </div>
    <SliceZone sliceZone={gallery.data.body} /> 
    </Col>
    </Row>
    </>
  )
 }

 export async function getServerSideProps() {
  const gallery = await client.getSingle('gallery')
  return { props: { gallery } }
}
    