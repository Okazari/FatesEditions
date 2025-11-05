import React from 'react'

const Image = ({ contentState }) => {
  const src = contentState.getEntity(contentState.getLastCreatedEntityKey()).getData().src
  return (<img src={src} alt="" />)
}

export default Image
