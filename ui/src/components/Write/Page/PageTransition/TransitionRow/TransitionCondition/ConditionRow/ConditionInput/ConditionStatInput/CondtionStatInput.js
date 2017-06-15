import React from 'react'
import { Input, SelectInput } from '../../../../../../../../common'
import styles from './styles.scss'

class ConditionStatInput extends React.Component {
  constructor(props) {
    super(props)
    const { condition } = this.state
    this.state = { condition }
  }

  componentWillUpdate(nextProps) {
    const { condition } = this.props
    if (condition !== nextProps.condition) {
      this.setState({ condition: nextProps.condition })
    }
  }

  updateCondition = (value) => {
    const { index, updateResource } = this.props
    const { condition } = this.state
    const newCondition = { ...condition, ...value }
    updateResource(index, newCondition)
    this.setState({ condition: newCondition })
  }

  render() {
    const { stats } = this.props
    const { condition } = this.state
    return (
      <div className={styles.component}>
        <SelectInput
          debounce={500}
          className={styles.selectInput}
          domProps={{
            value: condition.subject,
            onChange: subject => this.updateCondition({ subject }),
          }}
        >
          {stats.map(stat => <option value={stat._id}>{stat.name}</option>)}
        </SelectInput>
        <SelectInput
          className={styles.selectInput}
          debounce={500}
          domProps={{
            value: condition.operator,
            onChange: operator => this.updateCondition({ operator }),
          }}
        >
          <option value="equal">est égale à</option>
          <option value="less">est inférieur</option>
          <option value="lessOrEqual">est inférieur ou égale à</option>
          <option value="more">est supérieur à</option>
          <option value="moreOrEqual">est supérieur ou égale à</option>
          <option value="notEqual">est différent de</option>
        </SelectInput>
        <Input
          className={styles.input}
          debounce={500}
          domProps={{
            type: 'number',
            value: condition.value,
            onChange: value => this.updateCondition({ value }),
            placeholder: 'Valeur de la condition',
          }}
        />
      </div>
    )
  }
}

export default ConditionStatInput
