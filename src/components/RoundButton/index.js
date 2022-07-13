import React from 'react'
import { RightArrow, SlantedArrow } from '../../assets'
import styles from './styes.module.css'

const RoundButton = ({ position = '', size = 'small' }) => {
  return (
    <button className={`${styles.button} ${styles[position]} ${styles[size]}`}>
      {size === 'small' ? <SlantedArrow /> : <RightArrow />}
    </button>
  )
}

export { RoundButton }
