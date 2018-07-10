import React from 'react'
import styles from './styles.scss'

const Infos = ({ infos }) => {
  // TODO Replace with loader
  if (!infos) return null
  console.log('infos : ', infos)
  return (
    <div className={styles.component}>
      {
        infos.map(info => <div>{info}</div>)
      }
    </div>
  )
}


export default Infos
