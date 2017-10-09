import React from 'react'
import { css, keyframes } from 'emotion'
import cx from 'classnames'

import LoopVideo from '../components/loop-video'

const container = css`
  position: relative;
  width: 600px;
  height: 337.5px;
`

const videoTextBase = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 20px;
`

const textVideo = css`
  ${videoTextBase};
  z-index: -1;
`

const svgVideoRectFill = keyframes`
  0% {
    fill: #f00;
  }
  33% {
    fill: #fff;
  }
  67% {
    fill: #009246;
  }
  100% {
    fill: #f00;
  }
`

const svgVideoText = css`
  ${videoTextBase};
  font-family: Times New Roman, serif;
  font-size: 375px;
  font-weight: 900;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & text {
    transform: scaleY(3);
    text-anchor: middle;
  }

  & mask rect {
    fill: rgba(255, 255, 255, 0.96);
  }

  & > rect {
    fill: #f00;
    animation: ${svgVideoRectFill} 9s ease infinite;
    -webkit-mask: url(#mask);
    mask: url(#mask);
  }
`

const VideoLogo = ({ videoSrc, className }) => (
  <div className={cx([container, className])}>
    <svg
      className={svgVideoText}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <mask id="mask" x="0" y="0" width="1920" height="1080">
          <rect x="0" y="0" width="1920" height="1080" />
          <text x="50%" y="25%">
            Spaghetti's
          </text>
        </mask>
      </defs>
      <rect x="0" y="0" width="1920" height="1080" />
    </svg>

    <LoopVideo className={textVideo} src={videoSrc} />
  </div>
)

export default VideoLogo
