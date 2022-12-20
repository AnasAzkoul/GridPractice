import React from 'react'; 
import './Homes.scss'; 
import {homeCards} from '../../Utils/constants';
import SingleHome from '../singleHome/SingleHome';

const Homes = () => {
  return (
    <section className="homes">
      {homeCards.map(card => {
        return <SingleHome key={card.id} card={card}/>
      })}
    </section>
  )
}

export default Homes
