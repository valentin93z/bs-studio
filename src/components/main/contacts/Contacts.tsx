import React, {FC} from 'react';
import classes from './Contacts.module.css';

const Contacts: FC = () => {
  return (
    <section className={classes.contacts}>
        <div>
            <h2 className={classes.contacts__header}>Наши контакты</h2>
        </div>
        <address>
            <ul className={classes.contacts__list}>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Адрес</p>
                    <p className={classes.contacts__data}>г.Белгород ул.Ленина д.1</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Режим работы</p>
                    <p className={classes.contacts__data}>Ежедневно с 8:00 до 20:00</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Телефон</p>
                    <p className={classes.contacts__data}>+7(950)500-50-50</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>Инстаграм</p>
                    <p className={classes.contacts__data}>@diva_nail31</p>
                </li>
                <li className={classes.contacts__item}>
                    <p className={classes.contacts__title}>WhatsApp</p>
                    <p className={classes.contacts__data}>+7(950)500-50-50</p>
                </li>
            </ul>
        </address>
    </section>
  )
}

export default Contacts;