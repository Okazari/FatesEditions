import React from "react";
import { Box, BoxHeader, BoxBody, BoxFooter } from "components/common/Box";
import { Button, DataTable } from "components/common";
import debounce from 'lodash.debounce'
import styles from './styles.scss'
import ItemRow from './ItemRow';

// @todo refactor centerFooter
const headers = [
  { type: "Nom" },
  { type: "Description" },
  { type: "Début" },
  { type: "Visible" },
  { type: <Button domProps={{"disabled":true}} className="fa fa-close md-whiteframe-z1" /> }
]

class BookItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {items: []}
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.debounceUpdate = debounce(() => props.updateResource(this.props.draft, false), this.props.debounceTime ? this.props.debounceTime : 1000);
  }

  componentDidMount() {
    const { draft } = this.props
    if(!!draft.objects) {
      this.setState({ items: draft.objects });
    }
  }

  componentDidUpdate(prevProps) {
    const { draft } = this.props
    if(prevProps.draft.objects !== draft.objects) {
      this.setState({ items: draft.objects });
    }
  };

  addItem() {
    this.setState({items: this.state.items.concat({})});
  }

  removeItem(index) {
    this.state.items.splice(index, 1);
    this.setState({items: this.state.items})
    this.debounceUpdate();
  }

  updateDraft = () => {
    const { draft } = this.props
    draft.objects = this.state.items;
    this.debounceUpdate();
  }

  render() {
    const { items } = this.state
    return (
      <div className={styles.component}>
        <Box className="box-primary">
          <BoxHeader withBorder>
            <h3 className="box-title">Objets</h3>
            <div className="box-tools pull-right">
              <div className="btn-group">
              </div>
            </div>
          </BoxHeader>
          <BoxBody className="no-padding">
            <DataTable headers={headers} className="table-hover">
              {items.map((item, index) => <ItemRow index={index} item={item} updateResource={this.updateDraft} deleteResource={this.removeItem} />)}
            </DataTable>
          </BoxBody>
          <BoxFooter className={styles.centerFooter}>
            <Button domProps={{onClick:this.addItem}}>
              Ajouter un objet
            </Button>
          </BoxFooter>
        </Box>
      </div>  )
  }
}

export default BookItem
