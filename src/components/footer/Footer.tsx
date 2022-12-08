import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <section className={classes.footer__wrapper}>
            <div className={classes.footer__container}>
                <div className={classes.footer__logo}>DIVA NAIL</div>
                <nav className={classes.footer__navigation}>
                    <ul className={classes.footer__list}>
                        <li className={classes.footer__item}>О студии</li>
                        <li className={classes.footer__item}>Услуги</li>
                        <li className={classes.footer__item}>Мастера</li>
                        <li className={classes.footer__item}>Галерея</li>
                        <li className={classes.footer__item}>Контакты</li>
                    </ul>
                </nav>
                <div className={classes.footer__contacts}>
                    <p>г.Белгород ул.Ленина д.1</p>
                    <p>Телефон: 1-111-111-11-11</p>
                </div>
            </div>
            <div className={classes.footer__rights}>
                <p>© Diva Nail 2022</p>
                <p>Все права защищены.</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer;