import React, { useMemo } from 'react'
import { GreenTick, WhiteTick } from '../../assets'
import { useWindowSize } from '../../hooks'
import styles from './styles.module.css'

const ProgramAgenda = () => {
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

  const windowSize = useWindowSize()

  return (
    <section className={styles.programAgenda}>
      {windowSize.width <= 480 && <h5>Program Highlights</h5>}
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
                        {windowSize.width <= 480 ? (
                          <WhiteTick className={styles.tick} />
                        ) : (
                          <GreenTick className={styles.tick} />
                        )}
                        {header}
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
  )
}

export { ProgramAgenda }
