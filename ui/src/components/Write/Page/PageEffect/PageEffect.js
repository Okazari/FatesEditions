import React from 'react'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../../common/Box'
import { Button, Loader } from '../../../common'
import EffectRow from './EffectRow'

const PageEffect = ({ page, updateResource }) => {
  const pushEffect = () => {
    //eslint-disable-next-line
    if (!page.effects) page.effects = []
    page.effects.push({ test: 'test' })
    updateResource({ _id: page._id, effects: page.effects }, { patch: true })
  }

  return (
    <div className="col-lg-12 col-sm-12 col-xs-12">
      <Box className="box-primary">
        <BoxHeader withBorder>
          <h3 className="box-title">{"Effets à l'arrivée sur la page"}</h3>
          <div className="box-tools pull-right">
            <div className="btn-group" />
          </div>
        </BoxHeader>
        <BoxBody>
          {
            page.effects && page.effects.map((effect) => {
              return <EffectRow effect={effect} bookId={page.bookId} />
            })
          }
        </BoxBody>
        <BoxFooter>
          <div className="col-xs-12">
            <Button className="md-whiteframe-z1" domProps={{ onClick: () => pushEffect() }}>
              Ajouter un Effet
            </Button>
          </div>
          <Loader />
        </BoxFooter>
      </Box>
    </div>
  )
}

export default PageEffect
