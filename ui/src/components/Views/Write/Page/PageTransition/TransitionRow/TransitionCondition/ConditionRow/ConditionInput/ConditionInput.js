import React from 'react'
import { ButtonIcon } from 'components/common'
import ConditionObjectInput from './ConditionObjectInput'
import ConditionStatInput from './ConditionStatInput'
import styles from './styles.scss'

const ConditionInput = ({ book, condition, index, updateCondition, removeCondition }) => {
  const renderInput = () => {
    switch (condition.type) {
      case 'stat':
        return (<ConditionStatInput
          stats={book.stats}
          condition={condition}
          index={index}
          updateCondition={updateCondition}
        />)
      case 'object':
        return (<ConditionObjectInput
          objects={book.objects}
          condition={condition}
          index={index}
          updateCondition={updateCondition}
        />)
      default:
        return <div style={{ flex: 1 }} />
    }
  }
  return (
    <div className={styles.component}>
      {renderInput()}
      <ButtonIcon
        icon="delete"
        domProps={{ onClick: () => removeCondition(condition.id) }}
      />
    </div>
  )
}

export default ConditionInput
