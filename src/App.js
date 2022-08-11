import React, { useMemo } from 'react'
import styles from './App.module.css'
import { AltSchool } from './assets'
import {
  eldovGroup,
  factory1,
  genesysLogo,
  programImg,
  programImg2,
  smoothLuxury,
  teneceGroup,
  veeMost,
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
                  <AltSchool className={styles.logo} />
                  <img src={genesysLogo} className={styles.genesysLogo} alt="genesys" title="genesys" />
                  <img src={factory1} alt="factory1" title="Factory1" />
                  <img src={eldovGroup} className={styles.eldovGroup} alt="eldov group" title="eldov group" />
                  <img src={teneceGroup} alt="Tenece" title="Tenece" />
                  <img src={veeMost} alt="veeMost" title="veeMost" />
                  <img src={smoothLuxury} className={styles.smoothLuxury} alt="smooth luxury" title="smooth luxury" />
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
