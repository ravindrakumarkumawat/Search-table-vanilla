import React from 'react'
import styles from './NormalCol.module.css'
const NormalCol = ({
  span,
  paddingTop="0",
  paddingBottom="0",
  paddingLeft="0",
  paddingRight="0",
  border="none",
  children
}) => {
  let classNames = 'col-'+span
  return (
    <div className={`${styles[classNames]}`} style={{ border, paddingLeft, paddingRight, paddingTop, paddingBottom }}>
      {children}
    </div>
  )
}

export default NormalCol
