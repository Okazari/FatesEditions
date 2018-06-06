import React from 'react'
import { browserHistory } from 'react-router'
import ToolbarButton from 'components/common/ToolbarLink'
import styles from './style.scss'
import logo from '../../../common/logo.svg'
// import { RouteService } from '../../../../services'

const GameToolbar = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <img className={styles.logo} alt="logo" src={logo} />
      </div>
      <div className={styles.bottom}>
        <div onClick={browserHistory.goBack}>
          <ToolbarButton icon="exit_to_app" />
        </div>
      </div>
    </div>
  )
}

export default GameToolbar
