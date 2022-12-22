import React, { FC } from 'react';
import classes from './Time.module.css';

const Time: FC = () => {
  return (
    <div className={classes.time}>Time</div>
  )
}

export default Time;

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