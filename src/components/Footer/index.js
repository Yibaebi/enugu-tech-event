import React from 'react'
import { mobileWhiteLogo } from '../../assets'
import { useWindowSize } from '../../hooks'
import { RoundButton } from '../RoundButton'
import styles from './styles.module.css'

const Footer = () => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width <= 480

  const openRegLink = () =>
    window.open(
      'https://docs.google.com/forms/d/124pPi1it79qGOsMgCG53umoowUwLMDAf9kVyN2jlYa4/edit?usp=sharing',
      '_blank',
    )
  return (
    <footer className={styles.footer}>
      <section className={styles.copywrite}>
        {isMobile ? (
          <RoundButton color="white" onClick={openRegLink} />
        ) : (
          <RoundButton size="large" onClick={openRegLink} />
        )}
        {!isMobile && (
          <React.Fragment>
            <p>&copy; Enugu Tech Summit 2022</p>
            <p>A Williams Uchemba Foundation Initiative.</p>
          </React.Fragment>
        )}
      </section>

      <section className={styles.eventDetails}>
        <div className={styles.eventSectionWrapper}>
          <aside className={styles.section}>
            <p>Event Center</p>
            <h3>Golden Heart Centre, Emene.</h3>
          </aside>

          {!isMobile && (
            <aside className={styles.section}>
              <p>Enquiries and Sponsorships</p>
              <h3>enugutechsummit@gmail.com</h3>
            </aside>
          )}
        </div>

        <div className={styles.eventSectionWrapper}>
          <aside className={styles.section}>
            <p>Event Date</p>
            <h3>28th September 2022.</h3>
          </aside>

          <aside className={styles.section}>
            <p>Event Time</p>
            <h3>10am prompt.</h3>
          </aside>
        </div>

        {isMobile && (
          <div className={styles.eventSectionWrapper}>
            <aside className={styles.section}>
              <p>Follow Online</p>
              <h3>#EnuguTechSummit</h3>
            </aside>
          </div>
        )}

        {isMobile && (
          <div className={styles.websiteCopy}>
            <img src={mobileWhiteLogo} alt="logo" />
            <p>A Williams Uchemba Foundation Initiative.</p>
            <p>&copy; 2022</p>
          </div>
        )}
      </section>
    </footer>
  )
}

export { Footer }
