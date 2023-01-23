import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../navbar/navLinks';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <section className={classes.footer__wrapper}>
            <div className={classes.footer__container}>
                <div className={classes.footer__logo}>
                    <Link className={classes.footer__link} to='/bs-studio/cover'>MST NAIL</Link>
                </div>
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
                    <p>Телефон: <a className={classes.footer__link} href='tel:+79153351515'>+7-915-335-15-15</a></p>
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