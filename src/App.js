import React, { useMemo } from 'react'
import styles from './App.module.css'
import {
  adarcrom,
  arcromride,
  buildspaceLogo,
  eldovGroup,
  factory1,
  genesysLogo,
  girlPowerMovement,
  programImg,
  programImg2,
  veeMost,
  willUchembaFoundation,
  xendFinance,
} from './assets/images'
import { AboutEvent, Button, Footer, Header, HorizontalTextScroller, ProgramAgenda, SpeakersList } from './components'
import { ContactUs } from './components/ContactUs'
import { useWindowSize } from './hooks'

function App() {
  const windowSize = useWindowSize()
  const isMobile = useMemo(() => windowSize.width <= 480, [windowSize])

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        {isMobile ? (
          <React.Fragment>
            <AboutEvent />
            <ProgramAgenda />
            <SpeakersList />
            <ContactUs />
            <Footer />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <section className={styles.programCover}>
              <img src={programImg} alt="program cover" />
            </section>
            <HorizontalTextScroller text="Program Agenda" />
            <ProgramAgenda />
            <section className={styles.programCover} style={{ marginBottom: '0px' }}>
              <img src={programImg2} alt="program cover" />
            </section>
            <SpeakersList />
            <HorizontalTextScroller text="About The Event" />
            <section className={styles.partnersSection}>
              <aside className={styles.partnersStatement}>
                <h5>The First ever Enugu Tech Summit</h5>
                <p>
                  In partnership with <span>Williams Uchemba Foundation</span>, join us for the first ever Tech
                  knowledge acquisition event <span>this September</span>. This particular event will aim at building
                  their confidence in approaching potential employers, business ideas, marketing strategies, and other
                  technical skills
                </p>
                <Button label="Read More" />
              </aside>
              <aside className={styles.partnersLogo}>
                <h5>Partners and Sponsors</h5>
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
              </aside>
            </section>
          </React.Fragment>
        )}
      </main>
      {!isMobile && <Footer />}
    </div>
  )
}

export default App
