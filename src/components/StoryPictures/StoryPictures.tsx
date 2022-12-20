import React from 'react'; 
import './StoryPictures.scss'; 
import story_1 from '../../assets/images/story-1.jpeg'; 
import story_2 from '../../assets/images/story-2.jpeg'; 

const StoryPictures = () => {
  return (
    <div className='story__pictures'>
      <img src={story_1} alt="couple with new home" className='story__img--1'/>
      <img src={story_2} alt="new home" className='story__img--2'/>
    </div>
  )
}

export default StoryPictures; 


