import React, { FC, useEffect } from 'react';
import classes from './Order.module.css';
import { createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import Calendar from './calendar/Calendar';
import ClientInfo from './clientInfo/ClientInfo';
import Master from './master/Master';
import Services from './serv/Services';
import Time from './time/Time';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { calendarSlice } from '../../app/reducers/calendarSlice';
import { orderSlice } from '../../app/reducers/orderSlice';

const Order: FC = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#968981',
      },
    },
  });

  const dispatch = useAppDispatch();
  const { id, firstName, lastName, phone, service, master } = useAppSelector(state => state.orderReducer);
  const { events } = useAppSelector(state => state.calendarReducer);

  const sendOrderRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios.patch('http://192.168.0.103:4444/events', {
      id,
      firstName,
      lastName,
      phone,
      master,
      service,
      status: 'ordered',
    })
    .then(() => {
      dispatch(orderSlice.actions.setId({}));
      dispatch(orderSlice.actions.setFirstName(''));
      dispatch(orderSlice.actions.setLastName(''));
      dispatch(orderSlice.actions.setPhone(''));
      dispatch(orderSlice.actions.setMaster(''));
      dispatch(orderSlice.actions.setServiceType(''));
      dispatch(orderSlice.actions.setService(''));
    })
    .catch((e) => {
      console.log('Error:', e);
    })
  }

  const fetchEvents = async () => {
    const response = await axios.get('http://192.168.0.103:4444/free-events');
    dispatch(calendarSlice.actions.getEvents(response.data));
  }

  useEffect(() => {
    fetchEvents();
  }, [events]);

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.order}>
        <Calendar />
        <Time />
        <ClientInfo />
        <Master />
        <Services />
        <button className={classes.order__button} onClick={sendOrderRequest}>Записаться</button>
      </section>
    </ThemeProvider>
  )
}

export default Order;