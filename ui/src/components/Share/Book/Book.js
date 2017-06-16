import React from 'react'
import { Content } from '../../App'
import { Box, BoxHeader, BoxBody } from '../../common/Box'
import DraftList from './DraftList'

const Book = () => {
  return (
    <Content title="Publier un livre" >
      <Box>
        <BoxHeader>
          <Box>
            <BoxHeader>
              <h4>Information importante</h4>
            </BoxHeader>
            <BoxBody>
              {'Publier l\'un de vos brouillon déplacera celui-ci dans la section "Partage". Les autres membres de MyVirtualStoryBook pourrons alors trouver votre histoire dans la liste des livres jouables. Il ne sera dès lors plus éditable à moins de le repasser en brouillon'}
            </BoxBody>
          </Box>
        </BoxHeader>
        <BoxBody>
          <DraftList />
        </BoxBody>
      </Box>
    </Content>
  )
}

export default Book
