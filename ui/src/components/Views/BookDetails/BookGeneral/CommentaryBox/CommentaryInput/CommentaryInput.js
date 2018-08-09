import React from 'react'
import { Form, TextAreaInput, Button } from 'components/common'

const CommentaryInput = ({ addComment, state }) => (
  <Form
    onSubmit={(e) => {
      e.preventDefault()
      addComment({
        text: e.target.text.value,
      })
    }}
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
