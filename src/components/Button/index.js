import React from 'react'
import styles from './styles.module.css'

const Button = ({ label = '', onClick = () => {}, buttonType = '', ...rest }) => {
  return (
    <button className={`${styles.button} ${buttonType ? ` ${styles[buttonType]}` : ''} `} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}

export { Button }
