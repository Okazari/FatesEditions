import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import { Input, TextAreaInput } from '../../../common'
import styles from './styles.scss'

const PageInformation = ({ page, updateResource }) => {
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
              onChange: title => updateResource({ ...page, title }),
              placeholder: 'Titre',
              required: true,
            }}
          />
          <TextAreaInput
            label="Memo"
            domProps={{
              type: 'text',
              value: page.description,
              onChange: description => updateResource({ ...page, description }),
              placeholder: 'Mémo',
              required: true,
            }}
          />
        </div>
      </BoxBody>
    </Box>
  )
}

export default PageInformation
