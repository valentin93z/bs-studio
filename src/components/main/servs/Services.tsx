import React, {FC, forwardRef} from 'react';
import { serviceData } from './serviceData';
import classes from './Services.module.css';
import { motion } from 'framer-motion';
import { showAnimationFromBottom } from '../../../utils/animations';


const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
        className={classes.services}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
    >
        <div className={classes.anchor__container}>
            <span className={classes.anchor} ref={ref}></span>
        </div>
        <p>Наши услуги</p>
        <motion.h2 className={classes.services__header} variants={showAnimationFromBottom} custom={1}>Прайс на все виды услуг</motion.h2>
        <motion.p className={classes.services__text} variants={showAnimationFromBottom} custom={2}>Подбор комплекса услуг производится с консультацией мастера в зависимости от пожеланий клиента. Консультация мастеров производится по желанию и включена в стоимость.</motion.p>
        <div className={classes.services__container}>
            <motion.div
                className={classes.manicure__container}
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
            >
                <motion.h3 className={classes.service__typeMan} variants={showAnimationFromBottom} custom={1}>Маникюр</motion.h3>
                <div className={classes.manicure__services}>
                    <div className={classes.manicure__master}>
                        <ul className={classes.services__list}>
                            {serviceData.manicure.map((service, index) =>
                                <motion.li className={classes.services__item} variants={showAnimationFromBottom} custom={index + 2} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </motion.li>
                            )}
                        </ul>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className={classes.pedicure__container}
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
            >
                <motion.h3 className={classes.service__typePed} variants={showAnimationFromBottom} custom={1}>Педикюр</motion.h3>
                <div className={classes.pedicure__services}>
                    <div className={classes.pedicure__master}>
                        <ul className={classes.services__list}>
                            {serviceData.pedicure.map((service, index) =>
                                <motion.li className={classes.services__item} variants={showAnimationFromBottom} custom={index + 2} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </motion.li>
                            )}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
})

export default Services;