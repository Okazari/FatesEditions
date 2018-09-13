import React from 'react'
import posed from 'react-pose'
import styles from './style.scss'

const Overlay = posed.div({
  hidden: {
    display: 'none',
    opacity: 0,
    delayChildren: 600,
  },
  visible: {
    display: 'block',
    opacity: 1,
    delayChildren: 0,
  },
})

const Carousel = posed.div({
  hidden: { transform: ({ zOffset }) => `translateZ(-${zOffset}px) rotateX(${2 * 360}deg)` },
  visible: {
    transform: ({ zOffset }) => `translateZ(-${zOffset}px) rotateX(0deg)`,
    transition: { duration: 7000, ease: [0, 1, 0, 1] },
  },
})

const ArrowLeft = posed.div({
  hidden: { opacity: 0, left: '0px' },
  visible: {
    opacity: 1,
    left: '30px',
    delay: 4000,
    transition: { duration: 1000 },
  },
})

const ArrowRight = posed.div({
  hidden: { opacity: 0, right: '0px' },
  visible: {
    opacity: 1,
    right: '30px',
    delay: 4000,
    transition: { duration: 1000 },
  },
})

const Roulette = ({ onClick, visible, values = [], cellHeight = 150 }) => {
  const numberOfCells = values.length
  const zOffset = Math.ceil(cellHeight / (2 * Math.PI / numberOfCells))
  const theta = 360 / numberOfCells

  return (
    <Overlay
      className={styles.overlay}
      pose={visible ? 'visible' : 'hidden'}
      onClick={onClick}
    >
      <div className={styles.overflow}>
        <ArrowLeft className={styles.arrowLeft} />
        <ArrowRight className={styles.arrowRight} />
        <div
          className={styles.perspective}
          style={{
            height: `${cellHeight}px`,
          }}
        >
          <Carousel
            zOffset={zOffset}
            className={styles.carousel}
          >
            {
              values.map((number, index) => {
                const angle = index * theta
                return (
                  <div
                    key={number}
                    className={styles.cell}
                    style={{
                      height: `${cellHeight}px`,
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

export default Roulette
