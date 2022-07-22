import React, { useMemo } from 'react'
import { RightArrow, SlantedArrow } from '../../assets'
import { useWindowSize } from '../../hooks'
import styles from './styes.module.css'

const RoundButton = ({ position = '', size = 'small', color = 'black' }) => {
  const windowSize = useWindowSize()
  const isMobile = useMemo(() => windowSize.width <= 480, [windowSize])
  const isOrange = useMemo(() => color === 'orange', [color])

  return (
    <React.Fragment>
      {isMobile ? (
        <React.Fragment>
          {isOrange ? (
            <button id="circle">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="300px"
                height="300px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
              >
                <defs>
                  <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                </defs>
                <circle cx="168" cy="168" r="84" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text fill="#000" width={168} height={168}>
                    <textPath xlinkHref="#circlePath" textLength="370">
                      Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;
                    </textPath>
                  </text>
                </g>
              </svg>
            </button>
          ) : (
            <button id="circle" className="white">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="300px"
                height="300px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
              >
                <defs>
                  <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                </defs>
                <circle cx="168" cy="168" r="84" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text fill="#fff" width={168} height={168}>
                    <textPath xlinkHref="#circlePath" textLength="370">
                      Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;Menu&nbsp;&nbsp;
                    </textPath>
                  </text>
                </g>
              </svg>
            </button>
          )}
        </React.Fragment>
      ) : (
        <button className={`${styles.button} ${styles[position]} ${styles[size]}`}>
          <React.Fragment>{size === 'small' ? <SlantedArrow /> : <RightArrow />}</React.Fragment>
        </button>
      )}
    </React.Fragment>
  )
}

export { RoundButton }
