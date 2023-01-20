import React, {FC, forwardRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { galleryData } from './galleryData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css';
import { motion } from 'framer-motion';

export const CarouselCom = forwardRef(({...props}, ref:any) => {
  return (
    <div
      ref={ref}
      className={classes.carousel__container}
    >
      <Carousel width='100%' dynamicHeight={false} showThumbs={false} infiniteLoop={true} showStatus={false}>
        {galleryData.map(item => 
          <div className={classes.carousel__img_container} key={item.id}>
            <img className={classes.carousel__image} src={item.img} alt={item.title} />
          </div>)}
      </Carousel>
    </div>
  )
})

export const MCarouselCom = motion(CarouselCom);