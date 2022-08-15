import React, { useMemo } from 'react'
import { useWindowSize } from '../../hooks'
import styles from './styes.module.css'

const RoundButton = ({ position = '', size = 'small', color = 'black', onClick = () => {} }) => {
  const windowSize = useWindowSize()
  const isMobile = useMemo(() => windowSize.width <= 480, [windowSize])
  const isOrange = useMemo(() => color === 'orange', [color])

  return (
    <React.Fragment>
      {isMobile ? (
        <React.Fragment>
          {isOrange ? (
            <button id="circle" onClick={() => onClick()}>
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
                      Click Here To Register&nbsp;
                    </textPath>
                  </text>
                </g>
              </svg>
            </button>
          ) : (
            <button id="circle" className="white" onClick={() => onClick()}>
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
                      Click Here To Register&nbsp;
                    </textPath>
                  </text>
                </g>
              </svg>
            </button>
          )}
        </React.Fragment>
      ) : (
        <button id="circle" className={`white ${styles[position]}`} onClick={() => onClick()}>
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
                  Click Here To Register&nbsp;
                </textPath>
              </text>
            </g>
          </svg>
        </button>
      )}
    </React.Fragment>
  )
}

export { RoundButton }
