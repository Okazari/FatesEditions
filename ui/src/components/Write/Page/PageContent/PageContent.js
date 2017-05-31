import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { TextEditor } from '../../../common'
import styles from './styles.scss'

const PageContent = ({ page, updateResource }) => {
  return page === null ? null : (
    <div>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Contenu</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          <TextEditor
            className={styles.component}
            initialContent={page.text || ''}
            resource={page}
            resourceHandler={updateResource}
            domProps={{ name: 'text' }}
          />
        </BoxBody>
        <BoxFooter />
      </Box>
    </div>
  )
}

export default PageContent
