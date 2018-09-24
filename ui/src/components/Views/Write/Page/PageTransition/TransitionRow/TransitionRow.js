import React from 'react'
import posed from 'react-pose'
import {
  ButtonIcon,
  Input,
} from 'components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TransitionRowBody from './TransitionRowBody'
import styles from './style.scss'

const Body = posed(TransitionRowBody)({
  hidden: {
    height: 0,
    padding: 0,
    opacity: 0,
    transition: {
      height: { duration: 300 },
      opacity: { duration: 300 },
      padding: { duration: 0, delay: 300 },
    },
  },
  visible: {
    height: 'auto',
    padding: '20px',
    opacity: 1,
    transition: {
      height: { duration: 300 },
      opacity: { duration: 300 },
      padding: { duration: 0 },
    },
  },
})

const TransitionRow = (props) => {
  const {
    book,
    transition,
    updateTransition,
    removeTransition,
    visible,
    setVisible,
  } = props
  const icon = visible ? 'angle-up' : 'angle-down'
  const doRemoveTransition = () => removeTransition(transition.id)
  return !!book && (
    <div className={styles.component}>
      <div className={styles.header}>
        <Input
          debounce={500}
          domProps={{
            value: transition.text,
            onChange: text => updateTransition({ text }),
            placeholder: 'Texte de la transition',
          }}
        />
        <ButtonIcon
          className={styles.deleteButton}
          icon="delete"
          domProps={{ onClick: doRemoveTransition }}
        />
      </div>
      <Body
        {...props}
        pose={visible ? 'visible' : 'hidden'}
      />
      <div
        className={styles.collapseButton}
        onClick={() => setVisible(!visible)}
      >
        <FontAwesomeIcon
          className={styles.icon}
          icon={icon}
        />
      </div>
    </div>
  )
}

export default TransitionRow
