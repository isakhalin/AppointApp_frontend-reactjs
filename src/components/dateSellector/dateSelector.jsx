import React, {useState} from 'react';
import moment from "moment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import Stack from "@mui/material/Stack";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import {useNavigate, useParams} from "react-router-dom";

export const DateSelector = ({daySelected, setDaySelected}) => {
  // const [value, setValue] = useState(moment(daySelected));
  const params = useParams();
  const navigate = useNavigate();
  console.log('00000',daySelected)
  console.log('params', params)
  console.log('111111', moment(`${params.year}.${params.month}.${params.day}`).format('x'))
  console.log('222222', moment(`${params.year}.${params.month}.${params.day}`).format('YYYY.MM.DD'))


  const handleChange = (newValue) => {
    setDaySelected(Number(newValue.format("x")));
    navigate(`/${newValue.year()}/${newValue.month() + 1}/${newValue.date()}`)
  };

  return (
    <div style={{paddingBottom: "5px"}}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Дата бронирования"
            inputFormat="DD.MM.YYYY"
            value={params.hasOwnProperty('year') ? moment(`${params.year}.${params.month}.${params.day}`) : daySelected}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          {/*<TimePicker*/}
          {/*  label="Time"*/}
          {/*  value={value}*/}
          {/*  onChange={handleChange}*/}
          {/*  renderInput={(params) => <TextField {...params} />}*/}
          {/*/>*/}
        </Stack>
      </LocalizationProvider>
      {/*<div>{`${moment(daySelected)}`}</div>*/}
    </div>
  );
};