import React, {FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { burgerSlice } from '../../app/reducers/burgerSlice';
import { INavLinks } from '../../models/INavLinks';
import classes from './Navbar.module.css';

const Navbar: FC = () => {

  const navLinks: INavLinks[] = [
    {title: 'О студии', url: '#'},
    {title: 'Услуги', url: '#'},
    {title: 'Мастера', url: '#'},
    {title: 'Галерея', url: '#'},
    {title: 'Контакты', url: '#'},
  ];

  const dispatch = useAppDispatch();
  const {toggle} = useAppSelector(state => state.burgerReducer);

  const toggleBurger = () => dispatch(burgerSlice.actions.setToggle());

  return (
    <header className={classes.navbar}>
        <div className={classes.navbar__logo}>DIVA NAIL</div>
        <nav className={classes.navbar__navigation}>
            <ul className={toggle ? classes.navbar__list_active : classes.navbar__list}>
              {navLinks.map((item, index) =>
                <li className={classes.navbar__item} key={index}>
                  <a className={classes.navbar__link} href={item.url}>{item.title}</a>
                </li>
              )}
            </ul>
            <div className={classes.navbar__icons} onClick={toggleBurger}>
              {toggle
                ? <div>&#x78;</div>
                : <div>&#x2630;</div>
              }
            </div>
        </nav>
        <div className={classes.navbar__contacts}>
          <p className={classes.navbar__address}>г.Белгород ул.Ленина д.1</p>
          <p className={classes.navbar__address}>Телефон: 1-111-111-11-11</p>
        </div>
    </header>
  )
}

export default Navbar;