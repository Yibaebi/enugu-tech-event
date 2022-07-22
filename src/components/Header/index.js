import React, { useMemo } from 'react'
import { mobileLogo } from '../../assets'
import { useWindowSize } from '../../hooks'
import { Button } from '../Button'
import { HorizontalTextScroller } from '../HorizontalTextScroller'
import { RoundButton } from '../RoundButton'
import styles from './styles.module.css'

const Header = () => {
  const windowSize = useWindowSize()
  const isMobile = useMemo(() => windowSize.width <= 480, [windowSize])

  return (
    <header className={styles.header}>
      {isMobile ? (
        <React.Fragment>
          <img src={mobileLogo} alt="logo" />
          <h6>Williams Uchemba Foundation presents</h6>
        </React.Fragment>
      ) : (
        <div className={styles.eventDate}>
          <RoundButton position="fixed" />
          <span>September 28th, 2022</span> | <span>Golden Heart Centre, Emene</span>
        </div>
      )}

      <h2>Enugu Tech & Entrepreneurial Summit</h2>
      {!isMobile ? (
        <React.Fragment>
          <HorizontalTextScroller text="Enugu State Youth to Tech Career and Business" />
          <section className={styles.headerCTA}>
            <p>
              Brought to you by the Williams Uchemba Foundation, join us for the first ever Tech knowledge acquisition
              event this September. This event is aimed at building young people’s confidence in approaching potential
              employers, generating business ideas, marketing strategies, and aquiring the necessary technical skills
              required to work in tech.
            </p>
            <Button label="Register To Attend" />
          </section>
        </React.Fragment>
      ) : (
        <RoundButton color="orange" />
      )}
    </header>
  )
}

export { Header }
