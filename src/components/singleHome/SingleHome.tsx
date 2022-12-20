import React from 'react'; 
import Button from '../Button/Button';
import {GoLocation} from 'react-icons/go'; 
import {BsKey} from 'react-icons/bs'; 
import {BiArea} from 'react-icons/bi'; 
import {BsPerson} from 'react-icons/bs'; 
import {AiFillHeart} from 'react-icons/ai'; 


import { HomeCard } from '../../Utils/constants';
import './SingleHome.scss'; 

interface SingleHomeProps {
  card: HomeCard
}

const SingleHome = ({card}: SingleHomeProps) => {
  return (
    <div className='home'>
      <img src={card.img} alt={card.title} className='home__img' />
      <p className='home__title'>{card.title}</p>
      <AiFillHeart className='home__icon home__icon--wish'/>
      <div className="home__details">        
        <p className='home__location'>
          <GoLocation className='home__icon'/>
          {card.location}
        </p>
        <p className="home__rooms">
          <BsPerson className='home__icon'/>
          {card.rooms} rooms
        </p>
        <p className="home__area">
          <BiArea className='home__icon'/>
          {card.area}
        </p>
        <p className="home__price">
          <BsKey className='home__icon'/>
            ${card.price}
        </p>
      </div>
      <Button type='primary'>contact Realtor</Button>
    </div>
  )
}

export default SingleHome
