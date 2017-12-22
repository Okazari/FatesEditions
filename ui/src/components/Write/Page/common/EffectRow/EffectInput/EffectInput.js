import React from 'react'
import { ButtonIcon } from 'components/common'
import ObjectInput from './ObjectInput'
import StatInput from './StatInput'
import styles from './styles.scss'

const EffectInput = ({ book, type, index, effect, updateResource, removeEffect }) => {
  const renderInput = () => {
    switch (type) {
      case 'stat':
        return (<StatInput
          stats={book.stats}
          effect={effect}
          index={index}
          updateResource={updateResource}
        />)
      case 'object':
        return (<ObjectInput
          objects={book.objects}
          effect={effect}
          index={index}
          updateResource={updateResource}
        />)
      default:
        return <div style={{ flex: 1 }} />
    }
  }
  return !book ? null : (
    <div className={styles.component}>
      {renderInput()}
      <ButtonIcon icon="delete" domProps={{ onClick: () => removeEffect(index) }} />
    </div>
  )
}

export default EffectInput
