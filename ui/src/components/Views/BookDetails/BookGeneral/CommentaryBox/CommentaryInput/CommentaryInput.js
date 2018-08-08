import React from 'react'
import { Form, TextAreaInput, Button } from 'components/common'

const CommentaryInput = ({ addComment }) => (
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
      debounce={500}
      domProps={{
        value: '',
        placeholder: 'Votre commentaire',
        name: 'text',
      }}
    />
    <Button>
      Envoyer
    </Button>
  </Form>
)

export default CommentaryInput