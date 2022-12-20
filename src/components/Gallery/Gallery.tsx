import React from 'react'; 
import { GalleryImage } from '../../Utils/constants';
import './Gallery.scss';

interface GalleryProps {
  images: GalleryImage[]
}

const Gallery = ({images}: GalleryProps) => {
  return (
    <section className="gallery">
      {images.map(image => {
        return (
          <figure
            key={image.id}
            className={
              `gallery__img-container gallery__img-container--${image.id}`
            }
          >
            <img
              src={image.img}
              alt="homes"
              className='gallery__img'
            />
          </figure>
        )
      })}
    </section>
  )
}

export default Gallery
