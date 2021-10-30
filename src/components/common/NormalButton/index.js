import React from 'react'
import styles from './NormalButton.module.css'

const NormalButton = ({
  name,
  btntype="btn",
  selected,
  handleAction
}) => {
  return (
    <button className={`${styles[btntype]}`} onClick={() => handleAction(selected)}>{name}</button>
  )
}

export default NormalButton
