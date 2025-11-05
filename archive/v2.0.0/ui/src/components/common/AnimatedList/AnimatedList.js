import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const AnimatedRow = posed.div({
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
})

const AnimatedList = ({ list, children }) => (
  <PoseGroup>
    {
      list.map((data, ...rest) => (
        <AnimatedRow key={data.id}>
          {children(data, ...rest)}
        </AnimatedRow>
      ))
    }
  </PoseGroup>
)

export default AnimatedList
