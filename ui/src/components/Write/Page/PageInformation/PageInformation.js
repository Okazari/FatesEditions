import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import { Input, TextAreaInput } from '../../../common'
import styles from './styles.scss'

class PageInformation extends React.Component { //({ page, updateResource }) => {
  constructor(props) {
    super(props)
    const {page} = this.props
    this.state = { page}
  }

  componentWillUpdate(nextProps) {
    const {page} = this.props
    if (page !== nextProps.page) {
      this.setState({ page: nextProps.page })
    }
  }

  updatePage = (value) => {
    const {updateResource} = this.props
    const {page} = this.state
    const newPage = { ...page, ...value }
    updateResource(newPage)
    this.setState({ page: newPage })
  }

  render() {
    const { page } = this.state
    return (
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Informations générales</h3>
        </BoxHeader>
        <BoxBody>
          <div className={styles.component}>
            <Input
              label="Titre"
              debounce={500}
              domProps={{
                type: 'text',
                value: page.title,
                onChange: title => this.updatePage({ title }),
                placeholder: 'Titre',
                required: true,
              }}
            />
            <TextAreaInput
              label="Memo"
              debounce={500}
              domProps={{
                type: 'text',
                value: page.description,
                onChange: description => this.updatePage({ description }),
                placeholder: 'Mémo',
                required: true,
              }}
            />
          </div>
        </BoxBody>
      </Box>
    )
  }
}

export default PageInformation
