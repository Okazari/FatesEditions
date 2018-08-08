import React from 'react'
import { Form, TextAreaInput, Message, Button } from 'components/common'
import styles from './style.scss'

const CommentaryInput = ({ addComment, state }) => (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        addComment({
          text: e.target.text.value,
        })
      }}
      className={styles.component}
    >
      <TextAreaInput 
      label="Ajouter un commentaire"
      domProps={{
        placeholder: 'Votre commentaire',
        name: 'text',
      }}
    />
    {/* <Message
      state={state}
      errorMessage={'Une erreur est survenue'}
      successMessage={'Votre message à bien été envoyé'}
    /> */}
    <Button>
      Envoyer
    </Button>
  </Form>
)

export default CommentaryInput