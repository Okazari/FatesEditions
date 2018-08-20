import React from 'react'
import { Form, TextAreaInput, Button, ErrorMessage } from 'components/common'


const CommentaryInput = ({ onSubmit, onCommentChange, comment, loading, error }) => (
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
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <Button>
      { loading
        ? 'Chargement'
        : 'Envoyer'
      }
    </Button>
  </Form>
)

export default CommentaryInput
