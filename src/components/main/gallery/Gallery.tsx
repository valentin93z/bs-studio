import React, {FC, forwardRef} from 'react';
import { MCarouselCom } from './CarouselCom';
import classes from './Gallery.module.css';
import { motion } from 'framer-motion';
import { showAnimationFromBottom } from '../../../utils/animations';

const Gallery = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
      className={classes.gallery}
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.2, once: true}}
    >
        <div className={classes.anchor__container}>
          <span className={classes.anchor} ref={ref}></span>
        </div>
        <motion.h2 className={classes.gallery__header} variants={showAnimationFromBottom} custom={1}>Наша галлерея</motion.h2>
        <MCarouselCom variants={showAnimationFromBottom} custom={2} />
    </motion.section>
  )
})

export default Gallery;