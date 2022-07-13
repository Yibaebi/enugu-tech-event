import React, { useMemo } from 'react'
import styles from './App.module.css'
import { AltSchool, CowryWise, GreenTick, Kuda } from './assets'
import { programImg, speakerWoman } from './assets/images'
import { Button, RoundButton } from './components'
import { HorizontalTextScroller } from './components/HorizontalTextScroller'

function App() {
  const PROGRAM_AGENDA = useMemo(
    () => ({
      Career: {
        headline: 'For the 9-5 inclined',
        description:
          'An interactive workshop and fireside chat with leading experts from leading tech companies including Google',
        highlights: [
          ['In-demand skills', 'Learn which skills are most sort after'],
          ['Learning opportunities & resources', 'How and where to learn those skills '],
          [
            'Securing employment',
            'How to use your skills to work for global tech companies remotely from enugu and earn in dollars',
          ],
          ['Q&A with Top Tech Talents', 'Ask experienced tech employees questions and get feedback from them directly'],
          ['Scholarships & Devices', '1000 scholarships and 200 devices to jumpstart training and career.'],
        ],
      },
      Entrepreneurship: {
        headline: 'For the Business inclined',
        description:
          'A 1-day interactive workshop and fireside chat with leading experts from leading tech companies including Google',
        highlights: [
          [
            'Idea Pitch Session',
            'Innovative businesses will be given an opportunity to pitvhntheir ideas and businesss solutions to a panel of judges and recieve feedback.',
          ],
          [
            'Grants and Support for Startups',
            'Innovative businesses will stand a chance to be awarded sedd fund grants to encourage their ventures.',
          ],
          [
            'Mentorship opportunities',
            'Successful startup founders will be paired to tech industry experts for 6-12 months mentorship to maximise business success.',
          ],
        ],
      },
    }),
    [],
  )

  // Dummy speakers list
  const SPEAKERS_LIST = useMemo(
    () =>
      Array(4).fill({
        image: speakerWoman,
        name: 'Collins Ndukwe',
        designation: 'Senior Eng. Program Manager, Google',
        linkedIn: 'https://www.linkedIn.com',
      }),
    [],
  )

  return (
    <div className="App">
      <header className={styles.header}>
        <div className={styles.eventDate}>
          <span>September 28th, 2022</span> | <span>Golden Heart Centre, Emene</span>
        </div>
        <RoundButton position="fixed" />
        <h2>Enugu Tech & Entrepreneurial Summit</h2>
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
      </header>
      <main className={styles.main}>
        <section className={styles.programCover}>
          <img src={programImg} alt="program cover" />
        </section>
        <HorizontalTextScroller text="Program Agenda" />
        <section className={styles.programAgenda}>
          {Object.keys(PROGRAM_AGENDA).map(program => {
            return (
              <aside className={styles.programAgendaSection} key={program}>
                <h5>{PROGRAM_AGENDA[program].headline}</h5>
                <h3>{program}</h3>
                <p>{PROGRAM_AGENDA[program].description}</p>
                <div className={styles.highlightContainer}>
                  <h5>Highlights</h5>
                  <ul className={styles.highlightList}>
                    {PROGRAM_AGENDA[program].highlights.map(highlight => {
                      const [header, description] = highlight
                      return (
                        <li key={header} className={styles.highlight}>
                          <h6>
                            <GreenTick className={styles.tick} /> {header}
                          </h6>
                          <p>{description}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </aside>
            )
          })}
        </section>
        <section className={styles.programCover} style={{ marginBottom: '0px' }}>
          <img src={programImg} alt="program cover" />
        </section>
        <section className={styles.speakersContainer}>
          <HorizontalTextScroller text="Speakers" background="transparent" />
          <aside className={styles.speakerList}>
            {SPEAKERS_LIST.map((speaker, idx) => {
              return (
                <div key={idx} className={styles.speaker}>
                  <img src={speaker.image} alt="" />
                  <h6>{speaker.name}</h6>
                  <p>{speaker.designation}</p>
                  <Button
                    buttonType="transparent"
                    label="View on LinkedIn"
                    onClick={() => window.open(speaker.linkedIn, 'blank')}
                  />
                </div>
              )
            })}
          </aside>
        </section>
        <HorizontalTextScroller text="About The Event" />
        <section className={styles.partnersSection}>
          <aside className={styles.partnersStatement}>
            <h5>The First ever Enugu Tech Summit</h5>
            <p>
              In partnership with <span>Williams Uchemba Foundation</span>, join us for the first ever Tech knowledge
              acquisition event <span>this September</span>. This particular event will aim at building their confidence
              in approaching potential employers, business ideas, marketing strategies, and other technical skills
            </p>
            <Button label="Read More" />
          </aside>
          <aside className={styles.partnersLogo}>
            <h5>Partners and Sponsors</h5>
            <div className={styles.logoContainer}>
              <CowryWise className={styles.logo} />
              <Kuda className={styles.logo} />
              <AltSchool className={styles.logo} />
              <Kuda className={styles.logo} />
              <CowryWise className={styles.logo} />
            </div>
          </aside>
        </section>
      </main>

      <footer className={styles.footer}>
        <section className={styles.copywrite}>
          <RoundButton size="large" />
          <p>&copy; Enugu Tech Summit 2022</p>
          <p>A Williams Uchemba Foundation Initiative.</p>
        </section>

        <section className={styles.eventDetails}>
          <div className={styles.eventSectionWrapper}>
            <aside className={styles.section}>
              <p>Event Venue</p>
              <h3>Golden Heart Centre, Emene.</h3>
            </aside>
            <aside className={styles.section}>
              <p>Enquiries and Sponsorships</p>
              <h3>enugutechsummit@gmail.com</h3>
            </aside>
          </div>
          <div className={styles.eventSectionWrapper}>
            <aside className={styles.section}>
              <p>Event Date</p>
              <h3>28th September 2022.</h3>
            </aside>
            <aside className={styles.section}>
              <p>Follow Online</p>
              <h3>#EnuguTechSummit</h3>
            </aside>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default App
