import React from 'react'
import { Input, SelectInput } from '../../../../../../common'
import styles from './styles.scss'

class StatInput extends React.Component {
  constructor(props) {
    super(props)
    const { effect } = this.props
    this.state = { effect }
  }

  componentWillUpdate(nextProps) {
    const { effect } = this.props
    if (effect !== nextProps.effect) {
      this.setState({ effect: nextProps.effect })
    }
  }

  updateEffect = (value) => {
    const { index, updateResource } = this.props
    const { effect } = this.state
    const newEffect = { ...effect, ...value }
    updateResource(index, newEffect)
    this.setState({ effect: newEffect })
  }

  render() {
    const { stats } = this.props
    const { effect } = this.state
    return (
      <div className={styles.component}>
        <SelectInput
          debounce={500}
          className={styles.selectInput}
          domProps={{
            value: effect.subject,
            onChange: subject => this.updateEffect({ subject }),
          }}
        >
          {stats.map(stat => <option value={stat._id}>{stat.name}</option>)}
        </SelectInput>
        <SelectInput
          className={styles.selectInput}
          debounce={500}
          domProps={{
            value: effect.operator,
            onChange: operator => this.updateEffect({ operator }),
          }}
        >
          <option value="aff">Prends la valeur de</option>
          <option value="dec">diminue de</option>
          <option value="div">est divisé par</option>
          <option value="inc">augmente de</option>
          <option value="mul">est multiplié par</option>
        </SelectInput>
        <Input
          className={styles.input}
          debounce={500}
          domProps={{
            type: 'number',
            value: effect.value,
            onChange: value => this.updateEffect({ value }),
            placeholder: 'Valeur de la condition',
          }}
        />
      </div>
    )
  }
}

export default StatInput
