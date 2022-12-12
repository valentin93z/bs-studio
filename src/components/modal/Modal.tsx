import { Zoom } from '@mui/material';
import React, {FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { modalSlice } from '../../app/reducers/modalSlice';
import classes from './Modal.module.css';
import axios from 'axios';

const Modal: FC = () => {

    const dispatch = useAppDispatch();

    // const sendPhoneRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:4444/order', {
    //         name: name,
    //         phone: phone,
    //     })
    //     .then(() => {
    //         dispatch(modalSlice.actions.setIsOpen());
    //         dispatch(modalSlice.actions.setName(''));
    //         dispatch(modalSlice.actions.setPhone(''));
    //     })
    //     .catch((e) => {
    //         console.log('Error:', e);
    //     })
    // }

  return (
    <section className={classes.modal} onClick={() => dispatch(modalSlice.actions.setIsOpen())}>
        <div className={classes.modal__container} onClick={(e) => e.stopPropagation()}>
            <h4 className={classes.modal__header}>Заполните форму и мы свяжемся с вами <br/> в течение 30 минут</h4>
            <form>
                <div className={classes.modal__textfields}>
                    <input type="text" placeholder='Ваше имя' />
                    <input  type="text" placeholder='Ваш номер телефона' />
                </div>
                <div>
                    <input type="checkbox" name="personal-data" id="personal-data" />
                    <label className={classes.modal__checkLabel} htmlFor="personal-data">Я принимаю условия обработки персональных данных</label>
                </div>
                {/* <button className={classes.modal__button} onClick={(e) => sendPhoneRequest(e)}>Отправить</button> */}
            </form>
        </div>
    </section>
  )
}

export default Modal;