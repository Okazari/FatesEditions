import React from 'react'
import logoBlack from 'components/common/logo.svg'
import logoWhite from 'components/common/logo_white.svg'
import styles from './style.scss'

const Loader = ({ white }) => (
  <div className={styles.component}>
    <img
      className={styles.logo}
      alt="logo"
      src={white ? logoWhite : logoBlack}
    />
  </div>
)

export default Loader
