import { Collapse, Slide } from '@mui/material';
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
        <div className={classes.navbar__logo}>MST NAIL</div>
        <nav className={classes.navbar__navigation}>
          <Slide direction='up' in={toggle}>
            <ul className={classes.navbar__list}>
              {navLinks.map((item, index) =>
                <li className={classes.navbar__item} key={index}>
                  <a className={classes.navbar__link} href={item.url}>{item.title}</a>
                </li>
              )}
            </ul>
          </Slide>
            <div className={classes.navbar__icons} onClick={toggleBurger}>
              {toggle
                ? <div><svg width='25px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div>
                : <div><svg width='25px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
              }
            </div>
        </nav>
        <div className={classes.navbar__contacts}>
          <p className={classes.navbar__address}>г.Белгород ул.Попова д.1</p>
          <p className={classes.navbar__address}>Телефон: 1-111-111-11-11</p>
        </div>
    </header>
  )
}

export default Navbar;