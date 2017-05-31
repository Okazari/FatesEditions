import React from 'react'
import { Button, SelectInput } from '../../../../../common'
import EffectRow from '../../../PageEffect/EffectRow'
import styles from './styles.scss'

class ConditionRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conditions: [],
    }
  }

  componentDidMount() {
    const { conditions } = this.props.transition
    //eslint-disable-next-line
    this.setState({ conditions })
  }

  componentDidUpdate(prevProps) {
    const { conditions } = this.props.transition
    if (prevProps.transition.conditions !== conditions) {
      //eslint-disable-next-line
      this.setState({ conditions })
    }
  }

  addCondition = () => {
    const { conditions } = this.state
    this.setState({ conditions: conditions.concat({}) })
  }

  updateCondition = () => {
    const { transition, updateResource } = this.props
    const { conditions } = this.state
    transition.conditions = conditions
    updateResource(transition)
  }

  removeCondition = (index) => {
    const { transition, updateResource } = this.props
    const { conditions } = this.state
    conditions.splice(index, 1)
    transition.conditions = conditions
    updateResource(transition)
  }

  render() {
    const { bookId, transition, updateResource } = this.props
    const { conditions } = this.state
    return (
      <div>
        <div className={styles.conditionHeader}>
          <span className={styles.title}>Conditions</span>
          <span> Opérateur de condition : </span>
          <SelectInput
            resource={transition}
            resourceHandler={updateResource}
            domProps={{ name: 'conditionOperator' }}
          >
            <option value="and">ET</option>
            <option value="or">OU</option>
          </SelectInput>
        </div>
        <div className={styles.conditionEffect}>
          {conditions.map((effect, index) =>
            <EffectRow
              effect={effect}
              index={index}
              bookId={bookId}
              updateResource={this.updateCondition}
              removeEffect={this.removeCondition}
            />)}
          <Button
            className="btn-xs md-whiteframe-z1"
            domProps={{ onClick: this.addCondition }}
          >
            {'Ajouter une Condition'}
          </Button>
        </div>
      </div>
    )
  }
}

export default ConditionRow
