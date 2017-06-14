import React from 'react'
import { SelectInput } from '../../../../../../../../common'
import styles from './styles.scss'

class ConditionObjectInput extends React.Component {
  constructor(props) {
    super(props)
    const {condition} = this.props
    this.state = {condition}
  }

  componentWillUpdate(nextProps) {
    const {condition} = this.props
    if (condition !== nextProps.condition) {
      this.setState({condition: nextProps.condition})
    }
  }

  updateCondition = (value) => {
    const {index, updateResource} = this.props
    const {condition} = this.state
    const newCondition = {...condition, ...value}
    updateResource(index, newCondition)
    this.setState({condition: newCondition})
  }

  render() {
    const {objects} = this.props
    const {condition} = this.state
    return (
      <div className={styles.component}>
        <SelectInput
          debounce={500}
          className={styles.selectInput}
          domProps={{
            value: condition.subject,
            onChange: subject => updateResource(index, { ...condition, subject }),
          }}
        >
          {objects.map(object => <option value={object._id}>{object.name}</option>)}
        </SelectInput>
        <SelectInput
          className={styles.selectInput}
          debounce={500}
          domProps={{
            value: condition.value,
            onChange: value => updateResource(index, { ...condition, value }),
          }}
        >
          <option value="doNotOwn">{'n\'est pas possédé'}</option>
          <option value="own">est possédé</option>
        </SelectInput>
      </div>
    )
  }
}

export default ConditionObjectInput
