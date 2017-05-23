import React from 'react'
import { SelectInput } from '../../../../common'
import EffectInput from './EffectInput'
import styles from './styles.scss'

class EffectRow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }

  componentDidMount() {
    const { type } = this.props.effect
    this.setState({ type: type })
  }

  updateType = (effect) => {
    const { updateResource } = this.props
    this.setState({ type: effect.type })
    updateResource()
  }

  render() {
    const { book, index, effect, updateResource, removeEffect } = this.props
    const { type } = this.state
    return (
      <div className={styles.component}>
        <div>
          <SelectInput className={styles.selectInput}
                       resource={ effect }
                       resourceHandler={ this.updateType }
                       debounceTime={ 0 }
                       domProps={{ name: 'type' }} >
            <option disabled selected>Choix de la variable</option>
            <option value="object">L'objet</option>
            <option value="stat">La statistique</option>
          </SelectInput>
          { type !== '' ? <EffectInput book={ book }
                                       type={ type }
                                       effect={ effect }
                                       index= { index }
                                       updateResource={ updateResource }
                                       removeEffect={ removeEffect } />
          : null }
        </div>
      </div>
    )
  }
}

export default EffectRow
