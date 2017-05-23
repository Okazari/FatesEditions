import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button } from '../../../common'
import debounce from 'lodash.debounce'
import EffectRow from './EffectRow'
import styles from './styles.scss'

class PageEffect extends React.Component {

  constructor(props) {
    super(props)
    const { page, updateResource, debounceTime } = this.props
    this.state = {
      effects: []
    }

    this.debounceUpdate = debounce(
      () => updateResource(page, false), debounceTime || 1000,
    );
  }

  componentDidMount() {
    const { page } = this.props
    if(!!page.effects) {
      this.setState({ effects: page.effects });
    }
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props
    if(prevProps.page.effects !== page.effects) {
      this.setState({ stats: page.effects });
    }
  }

  addEffect = () => {
    const { effects } = this.state
    this.setState({effects: effects.concat({})});
  }

  removeEffect = (index) => {
    const { effects } = this.state
    effects.splice(index, 1)
    this.setState({effects: effects})
    this.debounceUpdate();
  }

  updatePage = () => {
    const { page } = this.props
    page.effects = this.state.effects;
    this.debounceUpdate();
  }

  render() {
    const { bookId } = this.props
    const { effects } = this.state

    return (
      <div>
        <Box className="box-primary">
          <BoxHeader withBorder>
            <h3 className="box-title">Effets à l'arrivée sur la page</h3>
            <div className="box-tools pull-right">
              <div className="btn-group"/>
            </div>
          </BoxHeader>
          <BoxBody>
            <div className={styles.effectRow}>
              {effects.map((effect, index) => <EffectRow
                effect={ effect }
                index={ index }
                bookId={ bookId }
                updateResource={ this.updatePage }
                removeEffect={ index => this.removeEffect(index) }
              />)}
            </div>
          </BoxBody>
          <BoxFooter>
            <div className="col-xs-12">
              <Button className="md-whiteframe-z1" domProps={{onClick: () => this.addEffect()}}>
                Ajouter un Effet
              </Button>
            </div>
          </BoxFooter>
        </Box>
      </div>
    )
  }
}

export default PageEffect
