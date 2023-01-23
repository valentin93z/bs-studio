import React, {FC, forwardRef} from 'react';
import classes from './Cover.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { showAnimationFromBottom } from '../../../utils/animations';

const MainCover = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
      className={classes.cover}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
    >
        <div className={classes.anchor__container}>
          <span id={'about'} className={classes.anchor} ref={ref}></span>
        </div>
        <motion.h1 className={classes.cover__header} variants={showAnimationFromBottom} custom={1}>Студия профессионального маникюра и педикюра</motion.h1>
        <motion.p className={classes.cover__offer} variants={showAnimationFromBottom} custom={2}>Запишитесь сейчас и получите скидку 10% <br/> на первое посещение</motion.p>
        <motion.button className={classes.cover__button} variants={showAnimationFromBottom} custom={3}>
          <Link className={classes.cover__button_link} to='/bs-studio/order'>Записаться</Link>
        </motion.button>
    </motion.section>
  )
})

export default MainCover;