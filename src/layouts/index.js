import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import Header from './header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Spaghetti's Supper Club"
      meta={[
        {
          name: 'description',
          content: `Spaghetti's is an Italian Supper Club in NYC`,
        },
        {
          name: 'keywords',
          content: `Spaghetti's, supper club, Italian, NYC, foodie`,
        },
      ]}
    />

    <Header />

    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
