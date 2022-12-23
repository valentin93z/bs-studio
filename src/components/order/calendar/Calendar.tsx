import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { calendarSlice } from '../../../app/reducers/calendarSlice';
import { orderSlice } from '../../../app/reducers/orderSlice';
import { getDaysOfMonth } from '../../../utils/getDaysOfMonth';
import classes from './Calendar.module.css';
import { daysNames } from './daysNames';
import { monthNames } from './monthNames';

const Calendar: FC = () => {

    const dispatch = useAppDispatch();
    const { fullDate, days } = useAppSelector(state => state.calendarReducer);
    const { selectedDate } = useAppSelector(state => state.orderReducer);

    const year = fullDate && new Date(fullDate).getFullYear();
    const monthName = fullDate && monthNames[new Date(fullDate).getMonth()];

    useEffect(() => {
        dispatch(calendarSlice.actions.getDays(getDaysOfMonth(year, fullDate && new Date(fullDate).getMonth())));
      }, [fullDate]);
    
      const setDayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(orderSlice.actions.setDate(e.target.value));
      }

  return (
    <div className={classes.calendar}>
        <div className={classes.months}>
          <button className={classes.months__button} onClick={() => dispatch(calendarSlice.actions.decrementMonth())}>{'<'}</button>
          <p>{`${monthName} ${year}г.`}</p>
          <button className={classes.months__button} onClick={() => dispatch(calendarSlice.actions.incrementMonth())}>{'>'}</button>
        </div>
        <div>
          <ul className={classes.daysOfWeek__list}>
            {daysNames.map((day) =>
            <li className={classes.daysOfWeek__item} key={day}>{day}</li>)}
          </ul>
        </div>
        <div>
          <ul className={classes.daysOfMonth__list}>
            {days.map((day) =>
            <li
              className={classes.daysOfMonth__item}
              key={`${day.dayOfMonth}_${day.month}_${day.year}`}
              style={ day.dayOfMonth === 1 ? {gridColumn: day.dayOfWeek} : {}}
            >
              <input
                className={classes.daysOfMonth__radio}
                type="radio"
                name="dayOfMonth"
                id={`${day.dayOfMonth}_${day.month}_${day.year}`}
                value={JSON.stringify(day)}
                onChange={setDayValue}
                checked={day.year === selectedDate.year && day.month === selectedDate.month && day.dayOfMonth === selectedDate.dayOfMonth}
              />
              <label className={classes.daysOfMonth__label} htmlFor={`${day.dayOfMonth}_${day.month}_${day.year}`}>{day.dayOfMonth}</label>
            </li>)}
          </ul>
        </div>
    </div>
  )
}

export default Calendar;