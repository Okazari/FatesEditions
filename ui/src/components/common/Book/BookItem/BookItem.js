import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button, DataTable } from '../../../common'
import styles from './styles.scss'
import ItemRow from './ItemRow'

const headers = [
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description' },
  { type: 'Début', key: 'start' },
  { type: 'Visible', key: 'visible' },
  { type: <Button domProps={{ disabled: true }} className="fa fa-close md-whiteframe-z1" />, key: 'delete' },
]

const BookItem = ({ book, updateResource, disabled }) => {
  const addObject = () => {
    book.objects = book.objects.concat({})
    updateResource(book)
  }

  const removeObject = (index) => {
    book.objects.splice(index, 1)
    updateResource(book)
  }

  const updateDraft = (index, item) => {
    book.objects[index] = item
    updateResource(book)
  }

  return !!book && (
    <div className={styles.component}>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Objets</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody className="no-padding">
          <DataTable headers={headers} className="table-hover">
            {
              book.objects.map((item, index) => {
                return (
                  <ItemRow
                    key={item._id}
                    index={index}
                    item={item}
                    disabled={disabled}
                    updateResource={updateDraft}
                    deleteResource={removeObject}
                  />
                )
              })
            }
          </DataTable>
        </BoxBody>
        <BoxFooter className={styles.centerFooter}>
          <Button domProps={{ onClick: addObject, disabled }}>
            Ajouter un objet
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default BookItem
