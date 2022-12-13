import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { dayOfWeekData } from './dayOfWeekData';
import { getDaysInMonth } from '../../utils/getDaysInMonth';
import classes from './Order.module.css';
import { orderSlice } from '../../app/reducers/orderSlice';
import { timesData } from './timesData';
import { createTheme, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import { masterData } from '../main/masters/masterData';
import { serviceData } from '../main/servs/serviceData';
import axios from 'axios';

const Order: FC = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#968981',
      },
    },
  });

  const dispatch = useAppDispatch();
  const { firstName, lastName, phone, date, time, master, serviceType, service } = useAppSelector(state => state.orderReducer);

  const changeHandlerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setFirstName(e.target.value));
  }

  const changeHandlerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setLastName(e.target.value));
  }

  const changeHandlerPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setPhone(e.target.value));
  }

  const handleDateChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setDate(e.target.value));
  }

  const handleTimeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setTime(e.target.value));
  }

  const handleSelectMaster = (e: SelectChangeEvent) => {
    dispatch(orderSlice.actions.setMaster(e.target.value));
  }

  const handleSelectServiceType = (e: SelectChangeEvent) => {
    dispatch(orderSlice.actions.setServiceType(e.target.value));
    dispatch(orderSlice.actions.setService(''));
  }

  const handleServiceChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setService(e.target.value));
  }

      const sendOrderRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post('http://localhost:4444/order', {
            firstName,
            lastName,
            phone,
            date,
            time,
            master,
            serviceType,
            service,
        })
        .then(() => {
            dispatch(orderSlice.actions.setFirstName(''));
            dispatch(orderSlice.actions.setLastName(''));
            dispatch(orderSlice.actions.setPhone(''));
            dispatch(orderSlice.actions.setDate(''));
            dispatch(orderSlice.actions.setTime(''));
            dispatch(orderSlice.actions.setMaster(''));
            dispatch(orderSlice.actions.setServiceType(''));
            dispatch(orderSlice.actions.setService(''));
        })
        .catch((e) => {
            console.log('Error:', e);
        })
    }

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.order}>
      <div className={classes.order__textfields}>
                    <input onChange={(e) => changeHandlerFirstName(e)} value={firstName} type="text" placeholder='Имя' />
                    <input onChange={(e) => changeHandlerLastName(e)} value={lastName} type="text" placeholder='Фамилия' />
                    <input onChange={(e) => changeHandlerPhone(e)} value={phone} type="text" placeholder='Номер телефона' />
                </div>
        <div className={classes.calendar}>
          <div className={classes.month_indicator}>Декабрь 2022</div>
          <div className={classes.day_of_week}>
            {dayOfWeekData.map((day) =>
            <div className={classes.day_of_week__item} key={day.id}>{day.title}</div>)}
          </div>
          <div className={classes.date_grid}>
            {getDaysInMonth().map((day) =>
            <div className={classes.date_grid__item} key={day.dayOfMonth} style={day.dayOfMonth === 1 ? {gridColumn: day.dayOfWeek} : {}}>
                <input
                  className={classes.date_grid__radio}
                  type="radio"
                  name="calendar"
                  id={day.dayOfMonth.toString()}
                  value={day.dayOfMonth}
                  onChange={handleDateChecked}
                />
                <label className={classes.date_grid__label} htmlFor={day.dayOfMonth.toString()}>{day.dayOfMonth}</label>
            </div>)}
          </div>
        </div>
        <div>
          <ul className={classes.times__list}>
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
          </ul>

          <div className={classes.master}>
            <FormControl variant='standard' sx={{m: 1, minWidth: 120}} fullWidth>
              <InputLabel id='master_select_label'>Мастер</InputLabel>
              <Select value={master} onChange={handleSelectMaster} id='master_select' labelId='master-select-label'>
                {masterData.map((master) => 
                <MenuItem key={master.name} value={master.name}>{master.name}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl variant='standard' sx={{m: 1, minWidth: 120}} fullWidth>
              <InputLabel id='serviceType_select_label'>Услуги</InputLabel>
              <Select value={serviceType} onChange={handleSelectServiceType} id='serviceType_select' labelId='serviceType-select-label'>
                <MenuItem value='manicure'>Маникюр</MenuItem>
                <MenuItem value='pedicure'>Педикюр</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ul className={classes.service__list}>
            {serviceType && serviceData[serviceType].map((item) =>
            <li className={classes.service__item} key={item.id}>
              <input
                className={classes.service__radio}
                type="radio"
                name="service"
                id={item.id.toString()}
                value={item.title}
                onChange={handleServiceChecked}
              />
              <label className={classes.service__label} htmlFor={item.id}>
                <p className={classes.service__title}>{item.title}</p>
                <p className={classes.service__price}>{item.price}</p>
              </label>
            </li>)}
          </ul>
          <button className={classes.order__button} onClick={sendOrderRequest}>Записаться</button>
        </div>
      </section>
    </ThemeProvider>
  )
}

export default Order;