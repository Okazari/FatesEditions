import React from 'react'
import { Button, DataTable } from 'components/common'
import ItemRow from './ItemRow'
import styles from './styles.scss'

const headers = [
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description' },
  { type: 'Début', key: 'start' },
  { type: 'Visible', key: 'visible' },
  { type: <Button domProps={{ disabled: true }} className="fa fa-close md-whiteframe-z1" />, key: 'delete' },
]

const DraftItems = ({ draft, updateResource, disabled = false }) => {
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

  return !!draft && (
    <div>
      <div className={styles.component}>
        <DataTable headers={headers} className="table-hover">
          {
            draft.objects.map((item, index) => {
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
        <Button domProps={{ onClick: addObject, disabled }}>
          Ajouter un objet
        </Button>
      </div>
    </div>
  )
}

export default DraftItems
