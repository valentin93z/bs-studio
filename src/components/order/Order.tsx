import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import classes from './Order.module.css';
import { orderSlice } from '../../app/reducers/orderSlice';
import { createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import Calendar from './calendar/Calendar';
import ClientInfo from './clientInfo/ClientInfo';
import Master from './master/Master';
import Services from './serv/Services';

const Order: FC = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#968981',
      },
    },
  });

  const dispatch = useAppDispatch();
  const { date, time } = useAppSelector(state => state.orderReducer);
  
  const handleDateChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setDate(e.target.value));
  }

  const handleTimeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setTime(e.target.value));
  }

  // const sendOrderRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:4444/order', {
  //     firstName,
  //     lastName,
  //     phone,
  //     date,
  //     time,
  //     master,
  //     serviceType,
  //     service,
  //   })
  //   .then(() => {
  //     dispatch(orderSlice.actions.setFirstName(''));
  //     dispatch(orderSlice.actions.setLastName(''));
  //     dispatch(orderSlice.actions.setPhone(''));
  //     dispatch(orderSlice.actions.setDate(''));
  //     dispatch(orderSlice.actions.setTime(''));
  //     dispatch(orderSlice.actions.setMaster(''));
  //     dispatch(orderSlice.actions.setServiceType(''));
  //     dispatch(orderSlice.actions.setService(''));
  //   })
  //   .catch((e) => {
  //     console.log('Error:', e);
  //   })
  // }

  const fetchEvents = async () => {
    const response = await axios.get('http://192.168.0.101:4444/events');
    console.log(response.data);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.order}>
        <Calendar />
        <div>
          {/* <ul className={classes.times__list}>
            {timesData.map((time) =>
            <li className={classes.times__item} key={time}>
              <input
                className={classes.times__radio}
                type="radio"
                name="times"
                id={time}
                value={time}
                onChange={handleTimeChecked}
              />
              <label className={classes.times__label} htmlFor={time}>{time}</label>
            </li>)}
          </ul> */}
          <ClientInfo />
          <Master />
          <Services />
          <button className={classes.order__button}>Записаться</button>
        </div>
      </section>
    </ThemeProvider>
  )
}

export default Order;