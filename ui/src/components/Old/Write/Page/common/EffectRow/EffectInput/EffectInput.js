import React from 'react'
import classnames from 'classnames'
import { Button } from '../../../../../common'
import ObjectInput from './ObjectInput'
import StatInput from './StatInput'
import styles from './styles.scss'

const EffectInput = ({ book, type, index, effect, updateResource, removeEffect }) => {
  const buttonClassName = classnames('fa fa-close md-whiteframe-z1', styles.removeButton)
  return !book ? null : (
    <div className={styles.component}>
      {type === 'stat' ?
        <StatInput
          stats={book.stats}
          effect={effect}
          index={index}
          updateResource={updateResource}
        /> :
        <ObjectInput
          objects={book.objects}
          effect={effect}
          index={index}
          updateResource={updateResource}
        />}
      <Button className={buttonClassName} domProps={{ onClick: () => removeEffect(index) }} />
    </div>
  )
}

export default EffectInput
