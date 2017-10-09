import React from 'react'
import { css, keyframes } from 'emotion'

import LoopVideo from '../components/loop-video'
import VideoLogo from '../components/video-logo'
import RepeatingImage from '../components/repeating-image'

const breakpoint1 = `max-width: 1248px`

const bgVideo = css`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -2;
  background-size: cover;
`

const logo = css`
  margin: 0 48px 64px 0;

  @media (${breakpoint1}) {
    margin: 0 0 48px 0;
  }
`

const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (${breakpoint1}) {
    justify-content: center;
  }
`

const contentTextColor = keyframes`
  0% {
    color: #f00;
  }
  33% {
    color: #fff;
  }
  67% {
    color: #009246;
  }
  100% {
    color: #f00;
  }
`

const content = css`
  max-width: 1024px;
  margin-bottom: 48px;
  font-family: Menlo, monospace;
  font-size: 40px;
  line-height: 1.4;
  color: #fff;
  animation: ${contentTextColor} 12s ease infinite;
  text-shadow: 1px 2px #000;
  word-break: break-word;

  & *::selection {
    color: #f00;
    background: #fff;
  }

  & p {
    margin: 0;
    padding: 0 0 40px 0;
  }

  & a {
    color: #000;
    text-decoration: underline;
    transition: text-shadow 0.5s;

    &:hover {
      text-shadow: 10px 10px #f00, 20px 20px #fff, 30px 30px #009246;
    }
  }

  @media (${breakpoint1}) {
    max-width: 600px;
  }

  @media (max-width: 800px) {
    font-size: 28px;
    margin-bottom: 24px;

    & p {
      padding: 0 0 30px 0;
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`

const primaryContent = css`
  ${content};
  max-width: 600px;
  font-size: 64px;

  @media (max-width: 800px) {
    font-size: 44px;
  }
`

const emphasize = css`
  background: #000;
  color: #fff;
`

const version = css`
  color: #00f;
`

const IndexPage = () => {
  const bgVideoSrc = '/video/homepage-bg.mp4'
  const bgVideoStyle = {
    background: `url(${'/images/homepage-bg.jpg'}) no-repeat`,
  }

  const textVideoSrc = '/video/italian-flag.mp4'

  const nycGoogleMaps =
    'https://www.google.com/maps/place/New+York,+NY/@40.6976633,-74.120106,11z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7134248!4d-74.0055245'

  const garlicBreadImg = '/images/garlic-bread.jpg'

  return (
    <div className={container}>
      <VideoLogo videoSrc={textVideoSrc} className={logo} />

      <div className={primaryContent}>
        <p>
          <span className={emphasize}>Spaghetti's</span> is {}
          <a target="_blank" href={nycGoogleMaps}>
            New York City's
          </a>. finest Italian Supper Club.
        </p>
      </div>

      <div className={content}>
        <p>
          Hello, welcome to the <span className={emphasize}>
            Spaghetti's
          </span>{' '}
          website. On occasion, we invite friends to feast Italian-style in my
          home. And for that night, you're family.
        </p>

        <p>
          <RepeatingImage src={garlicBreadImg} />
        </p>

        <p>
          The first <span className={emphasize}>Spaghetti's</span> supper
          <span className={version}> (VERSION 0) </span>
          is a small fee-free friends-invite-only test-run. If you are on this
          website you are invited. It will be held on {}
          <span className={emphasize}>Friday, October 13 (2017) at 8PM</span> {}
          at <span className={emphasize}>857 Park Pl, Apt 1, Brooklyn</span>.
          The dress code is "big suit" or "red dress". RSVP for the special
          Italian dinner by emailing: {}
          <a
            target="_blank"
            href="mailto:kevin.e.roark@gmail.com&subject=Spaghettis+Reservation"
          >
            kevin.e.roark@gmail.com
          </a>
        </p>
      </div>

      <LoopVideo className={bgVideo} style={bgVideoStyle} src={bgVideoSrc} />
    </div>
  )
}

export default IndexPage
