import React, {FC} from 'react';
import classes from './Contacts.module.css';

const Contacts: FC = () => {
  return (
    <section className={classes.contacts}>
        <div>
            <div className={classes.anchor__container}>
                <span id='contacts' className={classes.anchor}></span>
            </div>
            <h2 className={classes.contacts__header}>Наши контакты</h2>
        </div>
        <address>
            <ul className={classes.contacts__list}>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Адрес</p>
                    <p className={classes.contacts__data}>г.Белгород ул.Попова д.1</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Режим работы</p>
                    <p className={classes.contacts__data}>Ежедневно с 8:00 до 20:00</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Телефон</p>
                    <p className={classes.contacts__data}>+1(111)111-11-11</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Инстаграм</p>
                    <p className={classes.contacts__data}>@mst_nail31</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>WhatsApp</p>
                    <p className={classes.contacts__data}>+1(111)111-11-11</p>
                </li>
            </ul>
        </address>
    </section>
  )
}

export default Contacts;