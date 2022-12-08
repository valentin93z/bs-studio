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

const Order: FC = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#968981',
      },
    },
  });

  const dispatch = useAppDispatch();
  const { date, time, master, service } = useAppSelector(state => state.orderReducer);

  const handleDateChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setDate(e.target.value));
  }

  const handleTimeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setTime(e.target.value));
  }

  const handleSelectMaster = (e: SelectChangeEvent) => {
    dispatch(orderSlice.actions.setMaster(e.target.value));
  }

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.order}>
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
          </div>
          <ul>
            
          </ul>
        </div>
      </section>
    </ThemeProvider>
  )
}

export default Order;