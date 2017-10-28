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
  const repeatingImgSrc = '/images/spaghetti-array.jpg'

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
        <RepeatingImage src={repeatingImgSrc} />
      </p>

      <p>
        The second <span className={emphasize}>Spaghetti's</span> supper
        <span className={version}> (V1) </span>
        will be held on {}
        <span className={emphasize}>Friday, November 3 (2017) at 8PM</span> {}
        at <span className={emphasize}>857 Park Pl, Apt 1, Brooklyn</span>.
        The dress code this time is "pin stripe" or "gold chain." The menu will not be the same.
        RSVP for the special
        Italian dinner by emailing: {}
        <a
          target="_blank"
          href="mailto:kevin.e.roark@gmail.com?subject=Spaghettis Reservation"
        >
          kevin.e.roark@gmail.com
        </a>.
      </p>

      <p>
        Archive of previous <span className={emphasize}>Spaghetti's</span>
        suppers:
        <ul>
          <li className={version}><Link to={'v0'}>V0 - 10/13/17</Link></li>
        </ul>
      </p>
    </div>
  )
}

export default IndexPage
