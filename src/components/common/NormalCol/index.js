import React from 'react'
import styles from './NormalCol.module.css'
const NormalCol = ({
  span,
  children
}) => {
  let classNames = 'col-'+span
  return (
    <div className={`${styles[classNames]}`}>
      {children}
    </div>
  )
}

export default NormalCol
