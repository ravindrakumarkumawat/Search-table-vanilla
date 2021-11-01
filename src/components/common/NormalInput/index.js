import React from 'react'

const NormalInput = ({
  value,
  onChange,
  type="text",
  placehoder
}) => {
  return (
    <input
      value={value}
      id="search"
      type={type}
      placeholder={placehoder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default NormalInput
