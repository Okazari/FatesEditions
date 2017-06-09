import React from 'react'
import { Button } from '../../../../../../../common'
import ConditionObjectInput from './ConditionObjectInput'
import ConditionStatInput from './ConditionStatInput'
import styles from './styles.scss'
import classnames from 'classnames'

const ConditionInput = ({ book, condition, index, updateResource, removeCondition }) => {
  const buttonClassName = classnames("fa fa-close md-whiteframe-z1", styles.removeButton)
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
      <Button className={buttonClassName} domProps={{ onClick: () => removeCondition(index) }} />
    </div>
  )
}

export default ConditionInput
