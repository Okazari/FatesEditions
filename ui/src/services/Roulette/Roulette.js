import React from 'react'
import posed from 'react-pose'
import styles from './style.scss'

const Overlay = posed.div({
  hidden: {
    opacity: 0,
    delayChildren: 600,
  },
  visible: {
    opacity: 1,
    delayChildren: 0,
  },
})

const Carousel = posed.div({
  hidden: { transform: ({ zOffset }) => `translateZ(-${zOffset}px) rotateX(${2 * 360}deg)` },
  visible: {
    transform: ({ zOffset }) => `translateZ(-${zOffset}px) rotateX(0deg)`,
    transition: { duration: 10000, ease: [0, 1, 0, 1] },
  },
})

class Roulette extends React.Component {
  state = { isVisible: false }

  onClick = () => this.setState({ isVisible: !this.state.isVisible })

  render() {
    const { cellHeight = 150, min = 0, max = 20 } = this.props
    const { isVisible } = this.state
    const numberOfCells = max - min

    const allValues = Array.from(new Array(numberOfCells), (val, index) => index + min)
    const zOffset = Math.ceil(cellHeight / (2 * Math.PI / numberOfCells))
    const theta = 360 / numberOfCells

    return (
      <Overlay
        className={styles.overlay}
        pose={isVisible ? 'visible' : 'hidden'}
        onClick={this.onClick}
      >
        <div className={styles.overflow}>
          <div className={styles.perspective}>
            <Carousel
              zOffset={zOffset}
              className={styles.carousel}
            >
              {
                allValues.map((number, index) => {
                  const angle = index * theta
                  return (
                    <div
                      className={styles.cell}
                      style={{
                        transform: `rotateX(${angle}deg) translateZ(${zOffset}px)`,
                      }}
                    >
                      {number}
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        </div>
      </Overlay>
    )
  }
}

export default Roulette
