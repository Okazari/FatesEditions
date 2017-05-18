import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import { LabelInput, TextAreaInput } from '../../../common'
import styles from './styles.scss'

const PageInformation = ({ page, updateResource }) => {
  return (
    <Box className="box-primary">
      <BoxHeader withBorder>
        <h3 className="box-title">Informations générales</h3>
      </BoxHeader>
      <BoxBody>
        <div className={styles.component}>
          <LabelInput
            label="Titre"
            resource={page}
            resourceHandler={updateResource}
            domProps={{ type: 'text', name: 'title', placeholder: 'Titre', required: true }}
          />
          <TextAreaInput
            label="Memo"
            resource={page}
            resourceHandler={updateResource}
            domProps={{ type: 'text', name: 'description', placeholder: 'Mémo', required: true }}
          />
        </div>
      </BoxBody>
    </Box>
  )
}

export default PageInformation
