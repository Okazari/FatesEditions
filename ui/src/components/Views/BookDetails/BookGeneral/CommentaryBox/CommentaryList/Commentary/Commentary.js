import React from 'react'
import { TextAreaInput, ButtonIcon } from 'components/common'
import { AuthService } from 'services'
import styles from './style.scss'

const Commentary = ({ commentary, deleteComment }) => {
  const date = new Date(commentary.lastModificationDate).toLocaleString()
  const user = AuthService.getUser().user
  return (
    <div className={styles.component}>
      <TextAreaInput
        label={commentary.author.username} 
        domProps={{
          value: commentary.text,
          disabled: true,
        }}
        className={styles.textArea}
        />
        <div className={styles.date}>{date}</div>
        { user._id == commentary.author.id
        ? (<ButtonIcon
          icon="close"
          className={styles.delete}
          domProps={{
            onClick: () => deleteComment({ commentId: commentary.id }),
          }}
        />)
        : null
        }
    </div>
  )
}

export default Commentary