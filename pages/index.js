import React from "react";
import Navigation from '../components/Navigation';
import SliceZone from '../components/SliceZone';
import { client } from '../prismic-configuration';





export default function Home({ home }) {


  return (
    <>
    <Navigation/>
      <SliceZone sliceZone={home.data.body} />    
    </>

  )
}


export async function getServerSideProps() {
  const home = await client.getSingle('home')

  return { props: { home } }
}
