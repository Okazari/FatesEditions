import React from 'react'
import { Button } from '../../../../../common'
import EffectRow from '../../../PageEffect/EffectRow'
import styles from './styles.scss'

class TransitionEffect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      effects: [],
    }
  }

  componentDidMount() {
    const { effects } = this.props.transition
    //eslint-disable-next-line
    this.setState({ effects })
  }

  componentDidUpdate(prevProps) {
    const { effects } = this.props.transition
    if (prevProps.transition.effects !== effects) {
      //eslint-disable-next-line
      this.setState({ effects })
    }
  }

  addEffect = () => {
    const { effects } = this.state
    this.setState({ effects: effects.concat({}) })
  }

  updateEffect = () => {
    const { transition, updateResource } = this.props
    const { effects } = this.state
    transition.effects = effects
    updateResource(transition)
  }

  removeEffect = (index) => {
    const { transition, updateResource } = this.props
    const { effects } = this.state
    effects.splice(index, 1)
    transition.effects = effects
    updateResource(transition)
  }

  render() {
    const { bookId } = this.props
    const { effects } = this.state
    return (
      <div className={styles.component}>
        <span>Effets</span>
        {effects.map((effect, index) =>
          <EffectRow
            effect={effect}
            index={index}
            bookId={bookId}
            updateResource={this.updateEffect}
            removeEffect={this.removeEffect}
          />)}
        <div className={styles.centerButton}>
          <Button
            className="btn-xs md-whiteframe-z1"
            domProps={{ onClick: this.addEffect }}
          >
            {'Ajouter un effet'}
          </Button>
        </div>
      </div>
    )
  }
}

export default TransitionEffect
