import React from 'react'
import { withState } from 'recompose'
import { RouletteService, EffectService } from 'services'
import SlideLeftRollButton from './SlideLeftRollButton'

const RollButtonContainer = (props) => {
  const { updateResult, roll, stats } = props

  const min = EffectService.getRollMin(roll, stats)
  const max = EffectService.getRollMax(roll, stats)

  const onClick = () => RouletteService.launchRoulette(min, max)
    .then(updateResult)
  return (
    <SlideLeftRollButton
      {...props}
      onClick={onClick}
    />
  )
}

const RollButtonWithState = withState(
  'result',
  'updateResult',
  null,
)(RollButtonContainer)


export default RollButtonWithState
