import React, {FC} from 'react';
import classes from './Contacts.module.css';
import { motion } from 'framer-motion';
import { showAnimationFromBottom } from '../../../utils/animations';

const Contacts: FC = () => {
  return (
    <motion.section
        className={classes.contacts}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
    >
        <div>
            <div className={classes.anchor__container}>
                <span id='contacts' className={classes.anchor}></span>
            </div>
            <motion.h2 className={classes.contacts__header} variants={showAnimationFromBottom} custom={1}>Наши контакты</motion.h2>
        </div>
        <address>
            <ul className={classes.contacts__list}>
                <motion.li className={classes.contacts__item} variants={showAnimationFromBottom} custom={2}>
                    <p className={classes.contacts__title}>Адрес</p>
                    <p className={classes.contacts__data}>г.Белгород ул.Попова д.1</p>
                </motion.li>
                <motion.li className={classes.contacts__item} variants={showAnimationFromBottom} custom={3}>
                    <p className={classes.contacts__title}>Режим работы</p>
                    <p className={classes.contacts__data}>Ежедневно с 8:00 до 20:00</p>
                </motion.li>
                <motion.li className={classes.contacts__item} variants={showAnimationFromBottom} custom={4}>
                    <p className={classes.contacts__title}>Телефон</p>
                    <p className={classes.contacts__data}>+7(915)335-15-15</p>
                </motion.li>
                <motion.li className={classes.contacts__item} variants={showAnimationFromBottom} custom={5}>
                    <p className={classes.contacts__title}>Инстаграм</p>
                    <p className={classes.contacts__data}>@mst_nail31</p>
                </motion.li>
                <motion.li className={classes.contacts__item} variants={showAnimationFromBottom} custom={6}>
                    <p className={classes.contacts__title}>WhatsApp</p>
                    <p className={classes.contacts__data}>+7(915)335-15-15</p>
                </motion.li>
            </ul>
        </address>
    </motion.section>
  )
}

export default Contacts;