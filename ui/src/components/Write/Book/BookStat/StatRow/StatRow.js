import React from 'react'
import { Input, Button } from '../../../../common'

class StatRow extends React.Component {
  constructor(props) {
    super(props)
    const { stat } = this.props
    this.state = { stat }
  }

  componentWillUpdate(nextProps) {
    const { stat } = this.props
    if (stat !== nextProps.stat) {
      this.setState({ stat: nextProps.stat })
    }
  }


  onDelete = (e) => {
    const { removeStat } = this.props
    removeStat(e.target.id)
  }

  updateStat = (value) => {
    const { index, updateResource } = this.props
    const { stat } = this.state
    const newStat = { ...stat, ...value }
    updateResource(index, newStat)
    this.setState({ stat: newStat })
  }

  render() {
    const { stat } = this.state
    const { index } = this.props
    return (
      <tr>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'text',
              value: stat.name,
              onChange: name => this.updateStat({ name }),
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
              value: stat.description,
              onChange: description => this.updateStat({ description }),
              placeholder: 'Description',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'number',
              value: stat.initValue,
              onChange: initValue => this.updateStat({ initValue }),
              placeholder: 'Valeur initiale',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'number',
              value: stat.min,
              onChange: min => this.updateStat({ min }),
              placeholder: 'Min',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'number',
              value: stat.max,
              onChange: max => this.updateStat({ max }),
              placeholder: 'Max',
              required: true,
            }}
          />
        </td>
        <td>
          <Input
            debounce={500}
            domProps={{
              type: 'checkbox',
              value: stat.visible,
              checked: stat.visible,
              onChange: visible => this.updateStat({ visible }),
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

export default StatRow
