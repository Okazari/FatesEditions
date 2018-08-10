import React from 'react'
import { Form, TextAreaInput, Button, Message } from 'components/common'


const CommentaryInput = ({ onSubmit, onCommentChange, onKeyPress, comment }) => (
  <Form onSubmit={onSubmit}>
    <TextAreaInput
      label="Ajouter un commentaire"
      domProps={{
        onChange: onCommentChange,
        onKeyPress: e => (e.charCode === 13 && e.ctrlKey) && onSubmit(e),
        placeholder: 'Votre commentaire',
        name: 'text',
        value: comment,
      }}
    />
    {/* {error && <ErrorMessage msg={error} />}
    {success && <SuccessMessage msg={success} />} */}
    <Button>
      Envoyer
    </Button>
  </Form>
)

export default CommentaryInput
