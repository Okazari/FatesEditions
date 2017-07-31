import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import styles from './styles.scss'
import PageGraph from './PageGraph'

const BookGraph = ({ book = {} }) => {
  return (
    <div className={styles.component}>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Graphique</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          <PageGraph draftId={book._id} />
        </BoxBody>
        <BoxFooter className="align-center" />
      </Box>
    </div>
  )
}

export default BookGraph
