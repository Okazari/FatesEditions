import React from 'react'
import classnames from 'classnames'
import logoBlack from 'components/common/logo.svg'
import logoWhite from 'components/common/logo_white.svg'
import styles from './style.scss'

const ToolbarLogo = ({ className, white, onClick }) => (
  <img
    onClick={onClick}
    className={classnames(styles.logo, className)}
    alt="logo"
    src={white ? logoWhite : logoBlack}
  />
)

export default ToolbarLogo
