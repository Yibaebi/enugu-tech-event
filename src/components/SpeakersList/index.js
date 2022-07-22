import { motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useMemo, useState } from 'react'
import { collinsNdukwe, drMbah, okeyEze, williamsUchemba } from '../../assets'
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
        name: 'Dr. Peter Mba',
        designation: 'MD/CEO, Pinnacle Oil & Gas',
      },
      {
        image: collinsNdukwe,
        name: 'Collins Ndukwe',
        designation: 'Senior Eng. Program Manager, Google',
      },
      {
        image: williamsUchemba,
        name: 'Williams Uchembah',
        designation: 'Actor, Filmaker, Humanitarian. Founder, WUF',
      },
      {
        image: okeyEze,
        name: 'Okey Eze',
        designation: 'No Position Yet',
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
        </React.Fragment>
      ) : (
        <aside className={styles.sliderSpeakersList}>
          <h5>Guest Speakers</h5>
          <h3>Meet Some of The Experts and Professionals Sharing Knowledge</h3>
          <Speakers speakersList={SPEAKERS_LIST} />
        </aside>
      )}
    </section>
  )
}

const variants = {
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
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const Speakers = ({ speakersList = [] }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const currentSpeaker = wrap(0, speakersList.length, page)
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
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
        <img src={speakersList[currentSpeaker].image} alt="speaker" />
        <h4>{speakersList[currentSpeaker].name}</h4>
        <h5>{speakersList[currentSpeaker].designation}</h5>
      </motion.div>
      <section className={styles.sliderBtns}>
        <div className={styles.nextBtn} onClick={() => paginate(1)}>
          <svg width="65" height="63" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32.5" cy="31.5" r="31.25" stroke="black" strokeWidth="0.5" />
            <path
              d="M24.1466 30.6991L44.9844 30.6991C45.4857 30.6991 45.8923 31.1053 45.8923 31.607C45.8923 32.1087 45.4857 32.515 44.9844 32.515L24.1466 32.5154C23.6453 32.5154 23.2386 32.1091 23.2386 31.6074C23.2382 31.1053 23.6453 30.6991 24.1466 30.6991Z"
              fill="black"
            />
            <path
              d="M29.6403 24.2202C29.8772 24.2202 30.1132 24.3122 30.291 24.4951C30.6411 24.8549 30.6327 25.4292 30.2733 25.7793L24.2454 31.6437L30.31 38.2624C30.6496 38.6324 30.6242 39.2067 30.2543 39.5454C29.8852 39.8832 29.3088 39.8595 28.9714 39.4892L22.3114 32.2207C21.979 31.8587 21.9959 31.2988 22.3477 30.9568L29.0074 24.4774C29.1835 24.3055 29.4123 24.2202 29.6404 24.2202L29.6403 24.2202Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={styles.prevBtn} onClick={() => paginate(-1)}>
          <svg width="65" height="63" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32.5" cy="31.5" r="31.25" stroke="black" strokeWidth="0.5" />
            <path
              d="M41.8534 33.3009H21.0156C20.5143 33.3009 20.1077 32.8947 20.1077 32.393C20.1077 31.8913 20.5143 31.485 21.0156 31.485L41.8534 31.4846C42.3547 31.4846 42.7614 31.8909 42.7614 32.3926C42.7618 32.8947 42.3547 33.3009 41.8534 33.3009Z"
              fill="black"
            />
            <path
              d="M36.3597 39.7798C36.1228 39.7798 35.8868 39.6878 35.709 39.5049C35.3589 39.1451 35.3673 38.5708 35.7267 38.2207L41.7546 32.3563L35.69 25.7376C35.3504 25.3676 35.3758 24.7933 35.7457 24.4546C36.1148 24.1168 36.6912 24.1405 37.0286 24.5108L43.6886 31.7793C44.021 32.1413 44.0041 32.7012 43.6523 33.0432L36.9926 39.5226C36.8165 39.6945 36.5877 39.7798 36.3596 39.7798L36.3597 39.7798Z"
              fill="black"
            />
          </svg>
        </div>
      </section>
    </>
  )
}

export { SpeakersList }
