import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Loader } from 'components/common';
import styles from './styles.scss'
import PageGraph from './PageGraph'

const BookGraph = ({draft = {}}) => {
  return (
    <div className={styles.component}>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Graphique</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
            </div>
          </div>
        </BoxHeader>
        <BoxBody>
          <PageGraph draftId={draft._id}/>
        </BoxBody>
        <BoxFooter className="align-center">
        </BoxFooter>
      </Box>
    </div>
  )}

export default BookGraph
