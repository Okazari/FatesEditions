import React from 'react'
import { Icon } from 'components/common'
import styles from './style.scss'


const AddNewDraft = ({ onClick }) => (
  <div
    onClick={onClick}
    className={styles.book}
  >
    <div className={styles.newBook}>
      <Icon icon="library_add" />
    </div>
  </div>
)

export default AddNewDraft
