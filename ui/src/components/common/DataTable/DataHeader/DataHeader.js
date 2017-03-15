import React from 'react'

const DataHeader = ({ headers= [] }) => {
  return (
    <thead>
      <tr>
        { headers.map(header => <th rowSpan="1" className={header.className}>{header.type}</th>) }
      </tr>
    </thead>
  )
}

export default DataHeader
