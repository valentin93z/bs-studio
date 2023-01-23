import React, {FC, forwardRef} from 'react';
import { masterData } from './masterData';
import classes from './Masters.module.css';
import { motion } from 'framer-motion';
import { showAnimationFromBottom } from '../../../utils/animations';

const Masters = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
        className={classes.masters}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
    >
        <div className={classes.anchor__container}>
            <span className={classes.anchor} ref={ref}></span>
        </div>
        <p>Наши мастера</p>
        <motion.h2 className={classes.masters__header} variants={showAnimationFromBottom} custom={1}>Мастера, творящие красоту</motion.h2>
            <ul className={classes.masters__list}>
                {masterData.map((master, index) =>
                    <motion.li className={classes.masters__item} variants={showAnimationFromBottom} custom={index + 2} key={index}>
                        <img src={master.photo} alt={master.name} />
                        <div className={classes.masters__description}>
                            <h4 className={classes.masters__name}>{master.name}</h4>
                            <p className={classes.masters__quality}>{master.quality}</p>
                        </div>
                    </motion.li>
                )}
            </ul>
    </motion.section>
  )
})

export default Masters;