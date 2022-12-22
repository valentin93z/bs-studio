import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { orderSlice } from '../../../app/reducers/orderSlice';
import { useInput } from '../../../hooks/useInput';
import classes from './ClientInfo.module.css';

const ClientInfo: FC = () => {

    const dispatch = useAppDispatch();
    const { firstName, lastName, phone } = useAppSelector(state => state.orderReducer);

    const changeHandlerFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 15) {
          dispatch(orderSlice.actions.setFirstName(e.target.value));
        }
    }
    
    const changeHandlerLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 15) {
          dispatch(orderSlice.actions.setLastName(e.target.value));
        }
    }
    
    const changeHandlerPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 12) {
          dispatch(orderSlice.actions.setPhone(e.target.value));
        }
    }

    const firstNameValid = useInput(firstName, {isEmpty: true, minLength: 2});
    const lastNameValid = useInput(lastName, {isEmpty: true, minLength: 2});
    const phoneValid = useInput(phone, {isEmpty: true, isPhone: true});

  return (
    <div className={classes.order__textfields}>
        <TextField
            variant='standard'
            id='firstName'
            label='Имя'
            sx={{mb: 2}}
            value={firstName}
            onChange={changeHandlerFirstName}
            onBlur={firstNameValid.onBlur}
            error={(firstNameValid.isDirty && firstNameValid.isEmpty) || (firstNameValid.isDirty && firstNameValid.minLengthError)}
            helperText={firstNameValid.isDirty && firstNameValid.errorText}
            fullWidth
        />
        <TextField
            variant='standard'
            id='lastName'
            label='Фамилия'
            sx={{mb: 2}}
            value={lastName}
            onChange={changeHandlerLastName}
            onBlur={lastNameValid.onBlur}
            error={(lastNameValid.isDirty && lastNameValid.isEmpty) || (lastNameValid.isDirty && lastNameValid.minLengthError)}
            helperText={lastNameValid.isDirty && lastNameValid.errorText}
            fullWidth
        />
        <TextField
            variant='standard'
            id='phone'
            label='Номер телефона'
            value={phone}
            onChange={changeHandlerPhone}
            onBlur={phoneValid.onBlur}
            error={(phoneValid.isDirty && phoneValid.isEmpty) || (phoneValid.isDirty && phoneValid.phoneError)}
            helperText={phoneValid.isDirty && phoneValid.errorText}
            fullWidth
        />
    </div>
  )
}

export default ClientInfo;