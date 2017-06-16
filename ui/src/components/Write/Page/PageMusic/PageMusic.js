import React from 'react'
import { Box, BoxHeader, BoxBody } from '../../../common/Box'
import { Button, GroupInput } from '../../../common'
import styles from './styles.scss'

const PageMusic = ({ page, updateResource }) => {
  return (
    <div>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">Musique de fond</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          <div className={styles.component}>
            <GroupInput
              label="Lien SoundCloud"
              domProps={{
                placeholder: 'Lien SoundCloud de votre musique de fond',
                value: page.backgroundMusic,
                onChange: backgroundMusic => updateResource({ ...page, backgroundMusic }),
              }}
            >
              <Button ><i className="fa fa-close" /></Button>
            </GroupInput>
          </div>
        </BoxBody>
      </Box>
    </div>
  )
}

export default PageMusic
