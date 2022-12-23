import React, { FC, useEffect } from 'react';
import classes from './Order.module.css';
import { createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import Calendar from './calendar/Calendar';
import ClientInfo from './clientInfo/ClientInfo';
import Master from './master/Master';
import Services from './serv/Services';
import Time from './time/Time';

const Order: FC = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#968981',
      },
    },
  });

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
        <Time />
        <ClientInfo />
        <Master />
        <Services />
        <button className={classes.order__button}>Записаться</button>
      </section>
    </ThemeProvider>
  )
}

export default Order;