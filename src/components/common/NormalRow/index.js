import React from 'react'
import styles from './NormalRow.module.css'

const NormalRow = ({
  classNames,
  children
}) => {
  console.log(styles[classNames])
  return (
    <div className={`${styles.row} ${styles[classNames]}`}>
      {children}
    </div>
  )
}

export default NormalRow
