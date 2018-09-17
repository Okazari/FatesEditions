import React from 'react'
import { withState } from 'recompose'
import { RouletteService, EffectService } from 'services'
import RollButton from './RollButton'

const RollButtonContainer = (props) => {
  const { updateResult, roll, stats } = props
  const min = EffectService.roll[roll.modifier].exec(roll.min, stats[roll.stat])
  const max = EffectService.roll[roll.modifier].exec(roll.max, stats[roll.stat])

  const onClick = () => RouletteService.launchRoulette(min, max)
    .then(updateResult)
  return (
    <RollButton
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
