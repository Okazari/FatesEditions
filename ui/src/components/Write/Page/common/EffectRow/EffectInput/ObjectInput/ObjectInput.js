import React from 'react'
import { SelectInput } from '../../../../../../common/index'
import styles from './styles.scss'

class ObjectInput extends React.Component {
  constructor(props) {
    super(props)
    const {effect} = this.props
    this.state = { effect }
  }

  componentWillUpdate(nextProps) {
    const {effect} = this.props
    if (effect !== nextProps.effect) {
      this.setState({ effect: nextProps.effect })
    }
  }

  updateEffect = (value) => {
    const {index, updateResource} = this.props
    const {effect} = this.state
    const newEffect = { ...effect, ...value }
    updateResource(index, newEffect)
    this.setState({ effect: newEffect })
  }

  render() {
    const {objects} = this.props
    const {effect} = this.state
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
          {objects.map(object => <option value={object._id}>{object.name}</option>)}
        </SelectInput>
        <SelectInput
          className={styles.selectInput}
          debounce={500}
          domProps={{
            value: effect.value,
            onChange: value => this.updateEffect({ value }),
          }}
        >
          <option value="add">est ajouté</option>
          <option value="remove">est retiré</option>
        </SelectInput>
      </div>
    )
  }
}

export default ObjectInput
