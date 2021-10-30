import React from 'react'

const NormalInput = ({
  value,
  onChange
}) => {
  return (
    <input
      id="search"
      type="text"
      placeholder="Search"
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default NormalInput
