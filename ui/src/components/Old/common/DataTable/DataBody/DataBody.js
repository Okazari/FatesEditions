import React from 'react'

const DataBody = ({ children }) => {
  return (
    <tbody role="alert" aria-live="polite" aria-relevant="all">
      {children}
    </tbody>
  )
}

export default DataBody
