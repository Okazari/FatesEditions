import React from 'react'

const SelectOption = ( { value, label, defaultValue, domProps } ) => {
  return <option value={value} {...domProps} selected={value === defaultValue}>{label}</option>
}

export default SelectOption
