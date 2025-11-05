import React from 'react'
import posed from 'react-pose'
import RollButton from './RollButton'

const SlideLeft = posed.div({
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
})

const SlideLeftRollButton = props => (
  <SlideLeft>
    <RollButton {...props} />
  </SlideLeft>
)

export default SlideLeftRollButton
