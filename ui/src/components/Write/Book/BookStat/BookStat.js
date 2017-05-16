import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'
import { Button, DataTable } from 'components/common';
import debounce from 'lodash.debounce'
import styles from './styles.scss';
import StatRow from './StatRow';

class BookStat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {stats: []}
    this.addStat = this.addStat.bind(this)
    this.removeStat = this.removeStat.bind(this)
    this.debounceUpdate = debounce(() => props.updateResource(this.props.draft, false), this.props.debounceTime ? this.props.debounceTime : 1000);
  }

  componentDidMount() {
    const { draft } = this.props
    if(!!draft.stats) {
      this.setState({ stats: draft.stats });
    }
  }

  componentDidUpdate(prevProps) {
    const { draft } = this.props
    if(prevProps.draft.stats !== draft.stats) {
      this.setState({ stats: this.props.draft.stats });
    }
  }

  addStat() {
    this.setState({stats: this.state.stats.concat({})});
  }

  removeStat(index) {
    this.state.stats.splice(index, 1);
    this.setState({stats: this.state.stats})
    this.debounceUpdate();
  }

  updateDraft = () => {
    const { draft } = this.props
    draft.stats = this.state.stats;
    this.debounceUpdate();
  }

  render() {
    const headers = [
      {type: "Nom"},
      {type: "Description"},
      {type: "Valeur initiale"},
      {type: "Minimum"},
      {type: "Maximum"},
      {type: "Visible", classtype: ""},
      {type: <Button domProps={{"disabled": true}} className="fa fa-close md-whiteframe-z1"/> }
    ]

    return (
      <div className={styles.component}>
        <Box className="box-primary">
          <BoxHeader withBorder>
            <h3 className="box-title">Caractéristiques</h3>
            <div className="box-tools pull-right">
              <div className="btn-group">
              </div>
            </div>
          </BoxHeader>
          <BoxBody className="no-padding">
            <DataTable headers={headers} className="table-hover">
              {this.state.stats.map((stat, index) => {
                return <StatRow index={index} stat={stat} updateResource={this.updateDraft} deleteResource={this.removeStat}/>
              })}
            </DataTable>
          </BoxBody>
          <BoxFooter className={styles.centerFooter}>
            <Button domProps={{onClick:this.addStat}}>
              Ajouter une caractéristique
            </Button>
          </BoxFooter>
        </Box>
      </div>
    )
  }
}

export default BookStat
