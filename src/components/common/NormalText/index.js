import React from 'react'
import styles from './NormalText.module.css'

const NormalText = ({
  title,
  subtitle
}) => {
  return (
    <div className={styles.space}>
      <div className={styles.label}>{title}</div>
      {subtitle && <div className={styles.value}>{subtitle}</div>}
    </div>
  )
}

export default NormalText
