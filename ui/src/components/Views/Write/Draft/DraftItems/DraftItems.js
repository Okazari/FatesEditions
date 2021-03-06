import React from 'react'
import { WideButton, ButtonIcon, DataTable, AnimatedList } from 'components/common'
import ItemRow from './ItemRow'
import styles from './styles.scss'

const headers = [
  { type: 'Icône', key: 'icon', className: styles.small },
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
        <WideButton
          domProps={{ onClick: addObject, disabled }}
        >
          Ajouter un objet / une compétence
        </WideButton>
        <DataTable headers={headers} className="table-hover">
          <AnimatedList list={book.objects}>
            {
              (item, index) => <ItemRow
                index={index}
                item={item}
                disabled={disabled}
                updateObject={updateObject}
                deleteObject={removeObject}
              />
            }
          </AnimatedList>
        </DataTable>
      </div>
    </div>
  )
}

export default DraftItems
