import React from 'react'
import { Button, ButtonIcon, DataTable } from 'components/common'
import ItemRow from './ItemRow'
import styles from './styles.scss'

const headers = [
  { type: 'Nom', key: 'name' },
  { type: 'Description', key: 'description', className: styles.large },
  { type: 'Début', key: 'start', className: styles.small },
  { type: 'Visible', key: 'visible', className: styles.small },
  { type: <ButtonIcon domProps={{ disabled: true }} icon="delete" />, key: 'delete', className: styles.small },
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
            draft.objects.map((item, index) => (
              <ItemRow
                key={item.id}
                index={index}
                item={item}
                disabled={disabled}
                updateResource={updateDraft}
                deleteResource={removeObject}
              />
            ))
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
