import React, {FC} from 'react';
import classes from './Cover.module.css';
import { Link } from 'react-router-dom';

const MainCover: FC = () => {

  return (
    <section className={classes.cover}>
        <h1 className={classes.cover__header}>Студия профессионального маникюра и педикюра</h1>
        <p className={classes.cover__offer}>Запишитесь сейчас и получите скидку 10% <br/> на первое посещение</p>
        <button className={classes.cover__button}>
          <Link className={classes.cover__button_link} to='/bs-studio/order'>Записаться</Link>
        </button>
    </section>
  )
}

export default MainCover;