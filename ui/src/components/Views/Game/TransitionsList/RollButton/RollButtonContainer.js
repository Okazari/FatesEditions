import React from 'react'
import { withState } from 'recompose'
import { RouletteService, EffectService } from 'services'
import RollButton from './RollButton'

const RollButtonContainer = (props) => {
  const { updateResult, roll, stats } = props
  const _roll = {
    active: true,
    min: 0,
    max: 20,
    modifier: '',
    stat: '',
    ...roll,
  }

  const min = _roll.modifier && _roll.stat
    ? EffectService.roll[_roll.modifier].exec(_roll.min, stats[_roll.stat])
    : _roll.min
  const max = _roll.modifier && _roll.stat
    ? EffectService.roll[_roll.modifier].exec(_roll.max, stats[_roll.stat])
    : _roll.max

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
