import React from 'react'
import {
  adarcrom,
  arcromride,
  buildspaceLogo,
  eldovGroup,
  factory1,
  genesysLogo,
  girlPowerMovement,
  veeMost,
  willUchembaFoundation,
  xendFinance,
} from '../../assets'
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
        <img src={willUchembaFoundation} className={styles.willUchembaLogo} alt="genesys" title="genesys" />
        <img src={genesysLogo} className={styles.genesysLogo} alt="genesys" title="genesys" />
        <img src={factory1} alt="factory1" title="Factory1" />
        <img src={eldovGroup} className={styles.eldovGroup} alt="eldov group" title="eldov group" />
        <img src={xendFinance} className={styles.eldovGroup} alt="smooth luxury" />
        <img
          src={girlPowerMovement}
          className={styles.genesysLogo}
          alt="Girl Power Movement"
          title="Girl Power Movement"
        />
        <img src={veeMost} alt="veeMost" title="veeMost" />
        <img src={buildspaceLogo} className={styles.smoothLuxury} alt="smooth luxury" />
        <img src={adarcrom} className={styles.genesysLogo} alt="smooth luxury" />
        <img src={arcromride} className={styles.genesysLogo} alt="smooth luxury" />
      </div>
    </section>
  )
}

export { AboutEvent }
