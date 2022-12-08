import React, {FC} from 'react';
import classes from './Cover.module.css';
import cover01 from '../../../img/cover01.jpg';
import cover02 from '../../../img/cover02.jpg';
import cover03 from '../../../img/cover03.jpg';
import { useAppDispatch } from '../../../app/hooks';
import { modalSlice } from '../../../app/reducers/modalSlice';

const MainCover: FC = () => {

  const dispatch = useAppDispatch();

  return (
    <section className={classes.cover}>
        <h1 className={classes.cover__header}>Студия профессионального маникюра и педикюра</h1>
        <p className={classes.cover__offer}>
            Запишитесь сейчас и получите скидку <span style={{color: '#1D1C1B'}}>10%</span> <br/> на первое посещение
        </p>
        <button className={classes.cover__button} onClick={() => dispatch(modalSlice.actions.setIsOpen())}>Записаться</button>
        <div className={classes.cover__images}>
            <img src={cover01} alt="cover-img" />
            <img src={cover02} alt="cover-img" />
            <img src={cover03} alt="cover-img" />
        </div>
    </section>
  )
}

export default MainCover;