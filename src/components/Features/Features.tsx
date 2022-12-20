import React from 'react'; 
import Feature from '../Feature/Feature';
import { features } from '../../Utils/constants';
import './features.scss'; 

const Features = () => {
  return (
    <section className='features'>
      {features.map(feature => {
        return (
          <Feature key={feature.id} feature={feature}/>
        )
      })}
    </section>
  )
}

export default Features
