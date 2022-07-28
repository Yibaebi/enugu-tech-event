import React from 'react'
import { AltSchool, CowryWise, Kuda } from '../../assets'
import { Button } from '../Button'
import styles from './styles.module.css'

const AboutEvent = () => {
  return (
    <section className={styles.container}>
      <h5>About the Event</h5>
      <h4>Exploring Employment & Business Opportunities in Tech for Enugu State Youth</h4>
      <p>
        Brought to you by the Williams Uchemba Foundation, join us for the first ever Tech knowledge acquisition event
        this September. This event is aimed at building young people’s confidence in approaching potential employers,
        generating business ideas, marketing strategies, and aquiring the necessary technical skills required to work in
        tech.
      </p>

      <Button label="View Event agenda" disabled />

      <h4 className={styles.brandSupportHeader}>Supported by top brands and merchants</h4>

      <div className={styles.logoContainer}>
        <CowryWise className={styles.logo} />
        <Kuda className={styles.logo} />
        <AltSchool className={styles.logo} />
      </div>
    </section>
  )
}

export { AboutEvent }
