import React from 'react';
import Slider from './Slider';
import Images from './Images';
import ImageSlider from './ImageSlider';


const SliceZone = ({ sliceZone }) => (
    <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('slider'):
          return <Slider slice={slice} key={`slice-${index}`} />
        case ('gallery'):
          return <Images slice={slice} key={`slice-${index}`} />
          case ('carousel'):
          return <ImageSlider slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
    </>
)

export default SliceZone