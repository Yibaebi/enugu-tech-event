import React from 'react'
import styles from './styles.module.css'

const HorizontalTextScroller = ({ text = '', background = '' }) => {
  return (
    // <section className={`${styles.headerScrollTextWrapper}`}>
    //   <div className={styles.headerScrollText}>
    //     <div className={`${styles.scrollText} ${background ? styles[background] : ''}`}>
    //       <span>{text}</span>
    //     </div>
    //     <div className={`${styles.scrollText} ${styles.scrollText2} ${background ? styles[background] : ''}`}>
    //       <span>{text}</span>
    //     </div>
    //   </div>
    // </section>

    <div className={styles['marquee']}>
      <p>
        <span>{text}</span> <span>{text}</span> <span>{text}</span>
      </p>
    </div>
  )
}

export { HorizontalTextScroller }
