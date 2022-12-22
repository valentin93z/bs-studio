import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { orderSlice } from '../../../app/reducers/orderSlice';
import { masterData } from '../../main/masters/masterData';
import classes from './Master.module.css';

const Master: FC = () => {

    const dispatch = useAppDispatch();
    const { master, serviceType, service } = useAppSelector(state => state.orderReducer);

    const handleSelectMaster = (e: SelectChangeEvent) => {
        dispatch(orderSlice.actions.setMaster(e.target.value));
    }

  return (
    <div className={classes.master}>
        <FormControl variant='standard' sx={{mb: 2}} fullWidth>
            <InputLabel id='master_select_label'>Мастер</InputLabel>
            <Select
                id='master_select'
                labelId='master-select-label'
                value={master}
                onChange={handleSelectMaster}
            >
                {masterData.map((master) => 
                <MenuItem key={master.name} value={master.name}>{master.name}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
  )
}

export default Master;