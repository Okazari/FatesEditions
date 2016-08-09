import React from 'react'
import styles from './style.scss'

const Input = ( { domProps, label } ) => {
  return (
    <div className="input-group margin-top col-xs-12">
      <label>{label}</label>
      <input className="form-control" {...domProps} />
    </div>
  )
}

export default Input
