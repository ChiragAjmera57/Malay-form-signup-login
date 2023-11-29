// DatePicker.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BirthDatePicker = ({ register }) => {
  return (
    <DatePicker
      
      dateFormat="dd/MM/yyyy"
      placeholderText="Select Birth Date"
      showYearDropdown
      {...register("date")}
      scrollableYearDropdown
      yearDropdownItemNumber={15}
      className="date-picker"
    />
  );
};

export default BirthDatePicker;
