import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button } from '../../../common'
import EffectRow from '../common/EffectRow'
import styles from './styles.scss'

const PageEffect = ({ bookId, page, updateResource }) => {
  const addEffect = () => {
    page.effects = page.effects.concat({})
    updateResource(page)
  }

  const removeEffect = (index) => {
    page.effects.splice(index, 1)
    updateResource(page)
  }

  const updatePage = (index, effect) => {
    page.effects[index] = effect
    updateResource(page)
  }

  return (
    <div>
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">{'Effets à l\'arrivée sur la page'}</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          <div className={styles.effectRow}>
            {page.effects.map((effect, index) =>
              <EffectRow
                key={effect._id}
                effect={effect}
                index={index}
                bookId={bookId}
                updateResource={updatePage}
                removeEffect={indexEffect => removeEffect(indexEffect)}
              />)}
          </div>
        </BoxBody>
        <BoxFooter>
          <div className="col-xs-12">
            <Button className="md-whiteframe-z1" domProps={{ onClick: () => addEffect() }} >
              {'Ajouter un Effet'}
            </Button>
          </div>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default PageEffect
