import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import { emphasize } from '../layouts/index'
import RepeatingImage from '../components/repeating-image'

const version = css`
  color: #00f;

  a {
    color: inherit;
  }
`

const IndexPage = () => {
  const garlicBreadImg = '/images/garlic-bread.jpg'

  return (
    <div>
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
        at <span className={emphasize}>857 Park Pl, Apt 1, Brooklyn</span>. The
        dress code is "big suit" or "red dress". RSVP for the special Italian
        dinner by emailing: {}
        <a
          target="_blank"
          href="mailto:kevin.e.roark@gmail.com?subject=Spaghettis Reservation"
        >
          kevin.e.roark@gmail.com
        </a>
      </p>
    </div>
  )
}

export default IndexPage
