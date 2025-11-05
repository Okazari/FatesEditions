import React from 'react'
import distanceInWords from 'date-fns/distance_in_words_to_now'
import frLocale from 'date-fns/locale/fr'
import { ButtonIcon, Icon } from 'components/common'
import { AuthService } from 'services'
import styles from './style.scss'

const Commentary = ({ commentary, deleteComment }) => {
  const date = distanceInWords(
    new Date(commentary.lastModificationDate),
    { locale: frLocale },
  )
  const user = AuthService.getUser()
  return (
    <div className={styles.component}>
      <div className={styles.label}>
        <Icon
          icon="account_circle"
          domProps={{
            className: styles.icon,
          }}
        />
        <div className={styles.author}>{commentary.author.username}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.text}>{commentary.text}</div>
      { user && user._id === commentary.author.id &&
        <ButtonIcon
          icon="close"
          className={styles.delete}
          domProps={{
            onClick: () => deleteComment({ commentId: commentary.id }),
          }}
        />
      }
    </div>
  )
}

export default Commentary
