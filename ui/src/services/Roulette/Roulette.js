import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

class Number extends React.Component { 
  constructor(props) {
    super(props)
    const { min, max } = props
    this.state = {
      number: Math.floor(Math.random() * (max - min) + min),
    }
    this.timeOut1 = setTimeout(
      () => this.setState({ number: Math.floor(Math.random() * (max - min) + min) }),
      100,
    )
    // this.timeOut2 = setTimeout(
    //   () => this.setState({ number: Math.floor(Math.random() * (max - min) + min) }),
    //   300,
    // )
    // this.timeOut3 = setTimeout(
    //   () => this.setState({ number: Math.floor(Math.random() * (max - min) + min) }),
    //   700,
    // )
    // this.timeOut4 = setTimeout(
    //   () => this.setState({ number: Math.floor(Math.random() * (max - min) + min) }),
    //   1600,
    // )
  }

  randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  render() {
    const { min, max, className } = this.props
    const { play } = this.state
    const finalClassName = classnames(className, {
      [styles.animate]: play,
    })

    // this.timeOut = setTimeout(
    //   () => this.setState(() => ({ number: this.randomInRange(min, max) })),
    //   0,
    // )


   return (
     <div className={finalClassName}>{this.randomInRange(min, max)}</div>
    )
  }
}

class Roulette extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: true,
      slowdown: false,
      stop: false,
    }
  }


  render() {
    const { min = 0, max = 20 } = this.props
    return (
      <div className={styles.overlay}>
      <div className={styles.arrow}></div>
        <div className={styles.overflow}>
          <div className={styles.roulette}>
            <Number className={styles.one} min={min} max={max} />
            <Number className={styles.two} min={min} max={max} />
            <Number className={styles.three} min={min} max={max} />
            <Number className={styles.four} min={min} max={max} />
            <Number className={styles.five} min={min} max={max} />
          </div>
        </div>
      </div>
    )
  }
}

export default Roulette