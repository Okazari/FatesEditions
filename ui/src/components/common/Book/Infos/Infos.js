import React from 'react'
import Loader from 'components/common/Loader'
import styles from './styles.scss'

const Infos = ({ infos }) => {
  if (!infos) return <Loader />
  return (
    <div className={styles.component}>
      {
        infos.map(info => <div key={info}>{info}</div>)
      }
    </div>
  )
}


export default Infos
