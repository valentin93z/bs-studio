import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import classes from './Services.module.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { orderSlice } from '../../../app/reducers/orderSlice';
import { serviceData } from '../../main/servs/serviceData';

const Services = () => {

    const dispatch = useAppDispatch();
    const { serviceType, service } = useAppSelector(state => state.orderReducer);

    const handleSelectServiceType = (e: SelectChangeEvent) => {
        dispatch(orderSlice.actions.setServiceType(e.target.value));
        dispatch(orderSlice.actions.setService(''));
    }
    
      const handleServiceChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(orderSlice.actions.setService(e.target.value));
    }

  return (
    <div className={classes.services}>
        <FormControl variant='standard' sx={{mb: 2}} fullWidth>
            <InputLabel id='serviceType_select_label'>Услуги</InputLabel>
            <Select value={serviceType} onChange={handleSelectServiceType} id='serviceType_select' labelId='serviceType-select-label'>
                <MenuItem value='manicure'>Маникюр</MenuItem>
                <MenuItem value='pedicure'>Педикюр</MenuItem>
            </Select>
        </FormControl>
        <ul>
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
    </div>
  )
}

export default Services;