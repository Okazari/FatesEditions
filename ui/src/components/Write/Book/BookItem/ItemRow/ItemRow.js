import React from 'react'
import { Button, Input } from '../../../../common'

class ItemRow extends React.Component {
  constructor(props) {
    super(props)
    const { item } = this.props
    this.state = { item }
  }

  componentWillUpdate(nextProps) {
    const {item} = this.props
    if (item !== nextProps.item) {
      this.setState({ item: nextProps.item })
    }
  }

  updateItem = (value) => {
    const { item } = this.state
    const { index, updateResource } = this.props
    const newItem = { ...item, ...value }
    updateResource(index, newItem)
    this.setState({ item: newItem })
  }

  onDelete = (e) => {
    const { deleteResource } = this.props
    deleteResource(e.target.id)
  }

  render() {
    const { item } = this.state
    const { index } = this.props
    return (
      <tr>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'text',
              value: item.name,
              onChange: name => this.updateItem({ name }),
              placeholder: 'Libellé',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'text',
              value: item.description,
              onChange: description => this.updateItem({ description }),
              placeholder: 'Description',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'checkbox',
              value: item.atStart,
              checked: item.atStart,
              onChange: atStart => this.updateItem({ atStart }),
              placeholder: 'Début',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'checkbox',
              value: item.visible,
              checked: item.visible,
              onChange: visible => this.updateItem({ visible }),
              placeholder: 'Visible',
              required: true,
            }}
          />
        </td>
        <td>
          <Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: this.onDelete, id: index }} />
        </td>
      </tr>
    )
  }
}

export default ItemRow
