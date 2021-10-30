import React from 'react'
import styles from './NormalRow.module.css'

const NormalRow = ({
  marginTop="0",
  marginBottom="0",
  marginRight="0",
  marginLeft="0",
  border="none",
  children
}) => {
  return (
    <div className={styles.row} style={{ marginTop, marginRight, marginLeft, marginBottom, border }}>
      {children}
    </div>
  )
}

export default NormalRow
