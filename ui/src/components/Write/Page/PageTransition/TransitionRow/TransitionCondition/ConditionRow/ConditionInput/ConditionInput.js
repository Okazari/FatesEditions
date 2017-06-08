import React from 'react'
import { Button } from '../../../../../../../common'
import ConditionObjectInput from './ConditionObjectInput'
import ConditionStatInput from './ConditionStatInput'
import styles from './styles.scss'

const ConditionInput = ({ book, condition, index, updateResource, removeCondition }) => {
  return (
    <div className={styles.component}>
      {condition.type === 'stat' ?
        <ConditionStatInput
          stats={book.stats}
          condition={condition}
          index={index}
          updateResource={updateResource}
        /> :
        <ConditionObjectInput
          objects={book.objects}
          condition={condition}
          index={index}
          updateResource={updateResource}
        />}
      <Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: () => removeCondition(index) }} />
    </div>
  )
}

export default ConditionInput
