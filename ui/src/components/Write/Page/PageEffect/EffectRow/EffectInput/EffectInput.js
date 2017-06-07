import React from 'react'
import { Button } from '../../../../../common'
import ObjectInput from './ObjectInput'
import StatInput from './StatInput'
import styles from './styles.scss'

const EffectInput = ({ book, type, index, effect, updateResource, removeEffect }) => {
  return !book ? null : (
    <div className={styles.component}>
      {type === 'stat' ?
        <StatInput stats={book.stats} effect={effect} index={index} updateResource={updateResource} /> :
        <ObjectInput objects={book.objects} effect={effect} index={index} updateResource={updateResource} />}
      <Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: () => removeEffect(index) }} />
    </div>
  )
}

export default EffectInput
