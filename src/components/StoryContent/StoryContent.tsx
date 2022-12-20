import React from 'react'; 
import Button from '../Button/Button'
import './StoryContent.scss'

const StoryContent = () => {
  return (
    <div className='story__content'>
      <h3 className="heading-3 mb-sm">happy customers</h3>
      <h2 className="heading-2 heading-2--dark mb-md">&ldquo;the best decision of our lives&rdquo;</h2>
      <p className="story__text mb-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi modi alias dignissimos eos corrupti veritatis reprehenderit architecto nobis soluta excepturi?
      </p>
      <Button type='primary'>Find your home</Button>
    </div>
  )
}

export default StoryContent
