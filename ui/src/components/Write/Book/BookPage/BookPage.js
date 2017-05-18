import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Button, DataTable } from 'components/common';
import styles from './styles.scss'
import PageRow from './PageRow'
import { browserHistory } from "react-router";

const headers = [
  { type: <Button domProps={{disabled: true}} className="fa fa-pencil md-whiteframe-z1"/> },
  { type: "Titre" },
  { type: "Description" },
  { type: <Button domProps={{disabled: true}} className="fa fa-close md-whiteframe-z1"/> },
]

const BookPage = ({pages = [], query, postResource, deleteResource}) => {

  const createPage = () => {
    postResource({...query, page: {}}).then(page => {
      browserHistory.push(`/app/write/book/${query.bookId}/page/${page._id}`)
    })
  }

  const { bookId } = query;

  return (
    <div className={styles.component}>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Pages</h3>
          <div className="box-tools pull-right">
            <div className="btn-group">
            </div>
          </div>
        </BoxHeader>
        <BoxBody className="table-responsive no-padding">
          <DataTable className="table-hover" headers={headers}>
            {pages.map(page => <PageRow pageId={page} key={page} bookId={bookId} deleteResource={deleteResource}/>)}
          </DataTable>
        </BoxBody>
        <BoxFooter className={styles.centerFooter}>
          <Button domProps={{onClick: createPage}}>
            Ajouter une page
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default BookPage
