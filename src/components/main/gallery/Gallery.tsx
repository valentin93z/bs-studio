import React, {FC} from 'react';
import CarouselCom from './CarouselCom';
import classes from './Gallery.module.css';

const Gallery: FC = () => {
  return (
    <section className={classes.gallery}>
        <div className={classes.anchor__container}>
          <span id='gallery' className={classes.anchor}></span>
        </div>
        <h2 className={classes.gallery__header}>Наша галлерея</h2>
        <CarouselCom />
    </section>
  )
}

export default Gallery;