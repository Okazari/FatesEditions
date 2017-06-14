import React from 'react'
import { Button } from '../../../../../common/index'
import ObjectInput from './ObjectInput/index'
import StatInput from './StatInput/index'
import styles from './styles.scss'
import classnames from 'classnames'

const EffectInput = ({ book, type, index, effect, updateResource, removeEffect }) => {
  const buttonClassName = classnames("fa fa-close md-whiteframe-z1", styles.removeButton)
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
