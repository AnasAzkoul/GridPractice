import React from 'react'; 
import {FeatureProp} from '../../Utils/constants'; 

import './Feature.scss'; 

type FeatureProps = {
  feature: FeatureProp
}

const Feature = ({feature}: FeatureProps) => {
  return (
    <div
    className='feature'
  >
    <feature.icon className='feature__icon'/>
    <h4 className='heading-4 heading-4--dark'>{feature.title}</h4>
    <p className="feature__text">{feature.text}</p>
  </div>
  )
}

export default Feature
