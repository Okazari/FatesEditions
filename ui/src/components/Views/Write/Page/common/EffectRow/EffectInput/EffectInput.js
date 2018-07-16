import React from 'react'
import { ButtonIcon } from 'components/common'
import ObjectInput from './ObjectInput'
import StatInput from './StatInput'
import styles from './styles.scss'

const EffectInput = ({ book, type, index, effect, updateEffect, removeEffect }) => {
  const renderInput = () => {
    switch (type) {
      case 'stat':
        return (<StatInput
          stats={book.stats}
          effect={effect}
          index={index}
          updateEffect={updateEffect}
        />)
      case 'object':
        return (<ObjectInput
          objects={book.objects}
          effect={effect}
          index={index}
          updateEffect={updateEffect}
        />)
      default:
        return <div style={{ flex: 1 }} />
    }
  }
  return book && (
    <div className={styles.component}>
      {renderInput()}
      <ButtonIcon icon="delete" domProps={{ onClick: removeEffect }} />
    </div>
  )
}

export default EffectInput
