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

const BookItem = ({ draft, updateResource }) => {
  const addObject = () => {
    draft.objects = draft.objects.concat({})
    updateResource(draft)
  }

  const removeObject = (index) => {
    draft.objects.splice(index, 1)
    updateResource(draft)
  }

  const updateDraft = (index, item) => {
    draft.objects[index] = item
    updateResource(draft)
  }

  return (
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
              draft.objects.map((item, index) => {
                return (
                  <ItemRow
                    index={index}
                    item={item}
                    updateResource={updateDraft}
                    deleteResource={removeObject}
                  />
                )
              })
            }
          </DataTable>
        </BoxBody>
        <BoxFooter className={styles.centerFooter}>
          <Button domProps={{ onClick: addObject }}>
            Ajouter un objet
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default BookItem
