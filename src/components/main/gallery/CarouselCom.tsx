import React, {FC} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { galleryData } from './galleryData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css';

const CarouselCom: FC = () => {
  return (
    <Carousel width='100%' dynamicHeight={false} showThumbs={false} infiniteLoop={true} showStatus={false}>
        {galleryData.map(item => 
            <div className={classes.carousel__container} key={item.id}>
                <img className={classes.carousel__image} src={item.img} alt={item.title} />
            </div>)}
    </Carousel>
  )
}

export default CarouselCom;