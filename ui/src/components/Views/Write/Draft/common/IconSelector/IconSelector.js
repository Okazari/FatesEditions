import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import styles from './style.scss'

const IconSelector = ({ id, icon, update }) => {
  const icons = library.definitions.fas
  const options = Object.keys(icons).map(name => ({
    value: name,
    label: <FontAwesomeIcon icon={name} />,
  }))
  return (
    <Select
      className={styles.select}
      value={{
        value: icon,
        label: <FontAwesomeIcon icon={icon} />,
      }}
      onChange={icon => update({ id, icon: icon.value })}
      options={options}
      styles={{
        control: () => ({
            display: 'flex',
            width: '100%',
            backgroundColor: '#F8F8F8',
            padding: '2px',
            borderBottom: 'dashed 1px #000',
            overflowX: 'hidden',
          }),
        option: (base) => ({
          ...base,
          backgroundColor: '#F8F8F8',
          overflowX: 'hidden',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          padding: '0',
        })
      }}
    />
  )
}
export default IconSelector