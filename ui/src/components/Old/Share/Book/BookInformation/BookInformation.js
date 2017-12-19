import React from 'react'
import classnames from 'classnames'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import styles from './styles.scss'

const boxClassName = classnames(styles.component, 'box-primary')

const BookInformation = ({ draft = {} }) => {
  return (
    <Box className={boxClassName}>
      <BoxHeader withBorder>
        <h4>Livre à publier</h4>
      </BoxHeader>
      <BoxBody>
        <div className={styles.cover}>
          <img className="cover-preview md-whiteframe-z1" alt="BookCover" src={draft.cover} />
        </div>
        <div className={styles.informations}>
          <h4>{draft.name}</h4>
          <h4 className="label label-danger md-whiteframe-z1">
            <i className="fa fa-pencil" style={{ marginRight: '5px' }} />
            Brouillon
          </h4>
          <div className={styles.synopsis}>{draft.synopsis}</div>
        </div>
      </BoxBody>
    </Box>
  )
}

export default BookInformation
