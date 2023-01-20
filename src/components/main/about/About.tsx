import React, {FC} from 'react';
import classes from './About.module.css';
import about02 from '../../../img/about02.jpg';
import { motion } from 'framer-motion';
import { showAnimationFromBottom } from '../../../utils/animations';

const About: FC = () => {
  return (
    <motion.section
      className={classes.about}
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.2, once: true}}
    >
        <div className={classes.anchor__container}>
            <span id={'about'} className={classes.anchor}></span>
        </div>
        <p>О студии</p>
        <motion.h2 className={classes.about__header} variants={showAnimationFromBottom} custom={1}>Пространство заботы и любви к себе</motion.h2>
        <div className={classes.about__content}>
          <motion.div
            className={classes.about__leftSide}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
          >
            <motion.p className={classes.about__text} variants={showAnimationFromBottom} custom={1}>Наша студия Diva Nail делает всё для того, чтобы предоставлять превосходное качество работ нашим гостям и оказывать сервис высокого уровня.</motion.p>
            <motion.p className={classes.about__text} variants={showAnimationFromBottom} custom={2}>Уютная и комфортная обстановка, приветливый персонал забота о вас - визитная карточка нашей студии.</motion.p>
            <motion.img className={classes.about__image} variants={showAnimationFromBottom} custom={3} src={about02} alt="about" />
          </motion.div>
          <motion.div
            className={classes.about__rightSide}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
          >
            <ul className={classes.about__list}>
              <motion.li className={classes.about__item} variants={showAnimationFromBottom} custom={1}>
              <svg height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                <h4 className={classes.about__itemHeader}>Качество</h4>
                <p className={classes.about__itemDescription}>Только проверенные материалы и индивидуальный подход</p>
              </motion.li>
              <motion.li className={classes.about__item} variants={showAnimationFromBottom} custom={2}>
              <svg height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 32v96H256V96h60.1c4.2 0 8.3 1.7 11.3 4.7l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L372.7 55.4c-15-15-35.4-23.4-56.6-23.4H256c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32zM117.4 160c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512H285.2c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7H117.4zM216 280v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V360H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V280c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                <h4 className={classes.about__itemHeader}>Стерильность</h4>
                <p className={classes.about__itemDescription}>Все инструменты проходят полный цикл стерилизации</p>
              </motion.li>
              <motion.li className={classes.about__item} variants={showAnimationFromBottom} custom={3}>
                <svg height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
                <h4 className={classes.about__itemHeader}>Опыт</h4>
                <p className={classes.about__itemDescription}>У нас работают только профессионалы своего дела</p>
              </motion.li>
              <motion.li className={classes.about__item} variants={showAnimationFromBottom} custom={4}>
              <svg height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                <h4 className={classes.about__itemHeader}>Скорость</h4>
                <p className={classes.about__itemDescription}>Мы ценим ваше время. В среднем, процедура занимает 1 час</p>
              </motion.li>
            </ul>
            <motion.p className={classes.about__text} variants={showAnimationFromBottom} custom={2}>От нас вы уйдете с чувством легкости и обновления, и приятные чувства останутся с вами до следующего посещения, потому что мы работаем для Вас.</motion.p>
          </motion.div>
        </div>
    </motion.section>
  )
}

export default About;