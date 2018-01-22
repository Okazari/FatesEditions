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

const DraftItems = ({ book, addObject, removeObject, updateObject, disabled = false }) => {
  return !!book && (
    <div>
      <div className={styles.component}>
        <DataTable headers={headers} className="table-hover">
          {
            book.objects.map((item, index) => (
              <ItemRow
                key={item.id}
                index={index}
                item={item}
                disabled={disabled}
                updateObject={updateObject}
                deleteObject={removeObject}
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
