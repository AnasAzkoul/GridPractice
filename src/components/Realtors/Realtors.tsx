import React from 'react'; 
import { Realtor } from '../../Utils/constants';
import './Realtors.scss';

interface RealtorsProps {
  data: Realtor[]
}

const Realtors = ({data}: RealtorsProps) => {
  return (
    <div className='realtors'>
      <h2 className="heading-3">top realtors</h2>
        {data.map(item => {
          return (
            <div className={`realtor realtor__${item.id}`} key={item.id}>
              <img src={item.img} alt={item.name} className='realtor__img' />
              <div className="realtor__details">
                <p className="realtor__name">{item.name}</p>
                <p className="realtor__sales">{item.sales} Houses sold</p>
              </div>
            </div>  
          )
        })}
    </div>
  )
}

export default Realtors
