import React from 'react';
import { navLinks } from '../navbar/navLinks';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <section className={classes.footer__wrapper}>
            <div className={classes.footer__container}>
                <div className={classes.footer__logo}><a className={classes.footer__link} href='#'>MST NAIL</a></div>
                <nav className={classes.footer__navigation}>
                    <ul className={classes.footer__list}>
                			{navLinks.map((item, index) =>
                    		<li className={classes.footer__item} key={index}>
                    			<a className={classes.footer__link} href={item.url}>{item.title}</a>
                    		</li>)}
                		</ul>
                </nav>
                <div className={classes.footer__contacts}>
                    <p>г.Белгород ул.Попова д.1</p>
                    <p>Телефон: 1-111-111-11-11</p>
                </div>
            </div>
            <div className={classes.footer__rights}>
                <p>© MST Nail 2022</p>
                <p>Все права защищены.</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer;