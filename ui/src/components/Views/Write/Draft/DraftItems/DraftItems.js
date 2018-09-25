import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { WideButton, ButtonIcon, DataTable } from 'components/common'
import { dataRow } from 'styles/reactPoseAnimation'
import ItemRow from './ItemRow'
import styles from './styles.scss'

const AnimatedItemRow = posed.div(dataRow)

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
          <PoseGroup>
            {
              book.objects.map((item, index) => (
                <AnimatedItemRow key={item.id}>
                  <ItemRow
                    key={item.id}
                    index={index}
                    item={item}
                    disabled={disabled}
                    updateObject={updateObject}
                    deleteObject={removeObject}
                  />
                </AnimatedItemRow>
              ))
            }
          </PoseGroup>
        </DataTable>
      </div>
    </div>
  )
}

export default DraftItems
