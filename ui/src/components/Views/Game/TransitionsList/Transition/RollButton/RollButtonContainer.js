import React from 'react'
import { withState } from 'recompose'
import { RouletteService } from 'services'
import RollButton from './RollButton'

const RollButtonContainer = (props) => {
  const { updateResult, min, max } = props
  const onClick = () => RouletteService.launchRoulette(min, max)
    .then(updateResult)
  return <RollButton
    {...props}
    onClick={onClick}
  />
}

const RollButtonWithState = withState(
  'result',
  'updateResult',
  null,
)(RollButtonContainer)


export default RollButtonWithState
