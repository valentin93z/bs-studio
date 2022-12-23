import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { orderSlice } from '../../../app/reducers/orderSlice';
import classes from './Time.module.css';

const Time: FC = () => {

  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.calendarReducer);
  const { selectedDate } = useAppSelector(state => state.orderReducer);

  const setId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(orderSlice.actions.setId(e.target.value));
  }

  return (
    <div className={classes.time}>
      <ul className={classes.times__list}>
        {events.filter((item) =>
        item.date.year === selectedDate.year &&
        item.date.month === selectedDate.month &&
        item.date.day === selectedDate.dayOfMonth).map((event) =>
        <li className={classes.times__item} key={event._id}>
          <input
            className={classes.times__radio}
            type="radio"
            name="time"
            id={event._id}
            value={event._id}
            onChange={setId}
          />
          <label className={classes.times__label} htmlFor={event._id}>{`${event.time.hours}:${event.time.minutes}`}</label>
        </li>)}
      </ul>
    </div>
  )
}

export default Time;

          {/* <ul>
            {timesData.map((time) =>
            <li  >
              <input
                type="radio"
                name="times"
                id={time}
                value={time}
                onChange={handleTimeChecked}
              />
              <label  htmlFor={time}>{time}</label>
            </li>)}
          </ul> */}