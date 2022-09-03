import { motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useCallback, useMemo, useState } from 'react'
import {
  collinsNdukwe,
  drMbah,
  hackSultan,
  napaOwusah,
  okeyEze,
  SpeakersArrowLeft,
  SpeakersArrowRight,
  ugochukwuAronu,
  williamsUchemba,
} from '../../assets'
import { useWindowSize } from '../../hooks'
import { Button } from '../Button'
import { HorizontalTextScroller } from '../HorizontalTextScroller'
import styles from './styles.module.css'

const SpeakersList = () => {
  // Dummy speakers list
  const SPEAKERS_LIST = useMemo(
    () => [
      {
        image: drMbah,
        name: 'Dr. Peter Mbah',
        designation: 'Keynote Speaker CEO',
        company: 'Pinnacle Oil & Gas',
        linkedIn: 'https://www.linkedin.com',
      },
      {
        image: collinsNdukwe,
        name: 'Collins Ndukwe',
        designation: 'Senior Engineering Program Manager',
        company: 'Google, Seattle Washington State',
        linkedIn: 'https://www.linkedin.com/in/collins-ndukwe-42bb192b/',
      },
      {
        image: napaOwusah,
        name: 'Napa Onwusah',
        designation: 'Founder, Shuzia',
        company: ' Ex- Google, Microsoft, SAP, VISA, Cisco',
        linkedIn: 'https://www.linkedin.com/in/napaonwusah/',
      },
      {
        image: williamsUchemba,
        name: 'Williams Uchembah',
        designation: 'Actor, Filmaker, Humanitarian',
        company: 'Founder, WUF',
        linkedIn: 'https://www.linkedin.com/in/williams-uchemba-1807091a0/',
      },
      {
        image: okeyEze,
        name: 'Okey Eze',
        designation: 'Managing Director',
        company: 'Tenece Cross-Border Subsidiaries',
        profile: 'http://www.tenece.com/okechukwu/',
      },
      {
        image: hackSultan,
        name: 'Hack Sultan',
        designation: 'Co-Founder + Tech',
        company: 'AltSchool Africa + TalentQL',
        linkedIn: 'https://www.linkedin.com/in/hacksultan/',
      },
      {
        image: ugochukwuAronu,
        name: 'Ugochukwu Aronu',
        designation: 'Co-founder / CEO',
        company: 'Xend, Wicrypt, Ogwugo.',
        linkedIn: 'https://www.linkedin.com/in/ugochukwu-aronu-4477a59b',
      },
    ],
    [],
  )

  const windowSize = useWindowSize()
  const isMobile = windowSize.width <= 480

  return (
    <section className={`${styles.speakersContainer} ${isMobile ? styles.mobile : ''}`}>
      {!isMobile ? (
        <React.Fragment>
          <HorizontalTextScroller text="Speakers" background="transparent" />
          <aside className={styles.speakerList}>
            {SPEAKERS_LIST.map((speaker, idx) => {
              const profileType = speaker.linkedIn ? 'LinkedIn' : speaker.twitter ? 'Twitter' : 'Profile'
              const buttonTitle = profileType === 'Profile' ? `View Speaker Profile` : `View ${profileType} Profile`

              return (
                <div key={idx} className={styles.speaker}>
                  <img src={speaker.image} alt="" />
                  <h6>{speaker.name}</h6>
                  <p>
                    {speaker.designation} <br /> {speaker.company}
                  </p>
                  <Button
                    buttonType="transparent"
                    label={buttonTitle}
                    onClick={() => window.open(speaker.linkedIn, 'blank')}
                  />
                </div>
              )
            })}
          </aside>
        </React.Fragment>
      ) : (
        <aside className={styles.sliderSpeakersList}>
          <h5>Guest Speakers & Performers</h5>
          <h3>Meet Some of The Experts and Professionals Sharing Knowledge</h3>
          <Speakers speakersList={SPEAKERS_LIST} />
        </aside>
      )}
    </section>
  )
}

const Speakers = ({ speakersList = [] }) => {
  const variants = useMemo(
    () => ({
      enter: direction => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0,
        }
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => {
        return {
          zIndex: 0,
          x: direction < 0 ? 1000 : -1000,

          opacity: 0,
        }
      },
    }),
    [],
  )

  const swipeConfidenceThreshold = 10000
  const swipePower = useCallback((offset, velocity) => {
    return Math.abs(offset) * velocity
  }, [])

  const [[page, direction], setPage] = useState([0, 0])
  const currentSpeakerKey = wrap(0, speakersList.length, page)
  const paginate = useCallback(
    newDirection => {
      setPage([page + newDirection, newDirection])
    },
    [page],
  )

  const handleProfileClick = speaker => {
    const profileLink = speaker.linkedIn || speaker.twitter || speaker.profile
    window.open(profileLink, 'blank')
  }

  const currentSpeaker = useMemo(() => speakersList[currentSpeakerKey], [speakersList, currentSpeakerKey])
  const profileType = useMemo(
    () => (currentSpeaker.linkedIn ? 'LinkedIn' : currentSpeaker.twitter ? 'Twitter' : 'Profile'),
    [currentSpeaker.linkedIn, currentSpeaker.twitter],
  )
  const buttonTitle = profileType === 'Profile' ? `View Speaker Profile` : `View ${profileType} Profile`

  return (
    <React.Fragment>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}
        className={styles.speakerSlide}
      >
        <img src={currentSpeaker.image} alt="speaker" />
        <h4>{currentSpeaker.name}</h4>
        <h5>
          {currentSpeaker.designation} <br /> {currentSpeaker.company}
        </h5>
        <Button label={buttonTitle} onClick={() => handleProfileClick(currentSpeaker)} />
      </motion.div>
      <section className={styles.sliderBtns}>
        <div className={styles.nextBtn} onClick={() => paginate(-1)}>
          <SpeakersArrowLeft />
        </div>
        <div className={styles.prevBtn} onClick={() => paginate(1)}>
          <SpeakersArrowRight />
        </div>
      </section>
    </React.Fragment>
  )
}

export { SpeakersList }
