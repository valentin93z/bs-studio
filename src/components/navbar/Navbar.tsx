import React, {FC, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { burgerSlice } from '../../app/reducers/burgerSlice';
import classes from './Navbar.module.css';
import { navLinks } from './navLinks';

const Navbar: FC = () => {

  const dispatch = useAppDispatch();
  const {toggle} = useAppSelector(state => state.burgerReducer);

  const burgerMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (!burgerMenuRef.current?.contains(event.target)) {
        dispatch(burgerSlice.actions.setToggle(false));
      }
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return (
    <header className={classes.navbar} ref={burgerMenuRef}>
        <div className={classes.navbar__logo}>
          <Link className={classes.navbar__link} to='/bs-studio/cover'>MST NAIL</Link>
        </div>
        <nav className={classes.navbar__navigation}>
            <ul className={ toggle ? classes.navbar__list_active : classes.navbar__list}>
              {navLinks.map((item, index) =>
                <li className={classes.navbar__item} key={index}>
                  <Link className={classes.navbar__link} to={item.url} onClick={() => dispatch(burgerSlice.actions.setToggle(false))}>{item.title}</Link>
                </li>
              )}
            </ul>
            <div className={classes.navbar__icons}>
              {toggle
                ? 
                  <div onClick={() => dispatch(burgerSlice.actions.setToggle(false))}>
                    <svg width='25px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                  </div>
                : 
                  <div onClick={() => dispatch(burgerSlice.actions.setToggle(true))}>
                    <svg width='25px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                  </div>
              }
            </div>
        </nav>
        <div className={classes.navbar__contacts}>
          <p className={classes.navbar__address}>Телефон: <a className={classes.navbar__link} href='tel:+79153351515'>+7-915-335-15-15</a></p>
        </div>
    </header>
  )
}

export default Navbar;