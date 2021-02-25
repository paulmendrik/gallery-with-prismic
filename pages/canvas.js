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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
      <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js" ></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
      <script id="canvas" type="text/javascript" src="/static/script.js"></script>  
      </Head>
      <Navigation/>
      <Row justify="center" >
      <Col xs={20} sm={22} span={20}>
      <div className="title">
      <h1 className="title">Canvas Prints</h1>
      <h2 className="subtitle">The canvas prints are all hand finished and signed in oil</h2>
      </div>
      <SliceZone sliceZone={gallery.data.body} /> 
      </Col>
      </Row>
      </>
    )
 }

 export async function getServerSideProps() {
  const gallery = await client.getSingle('canvas')
  return { props: { gallery } }
}
    
    