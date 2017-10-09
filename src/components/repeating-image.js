import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const container = css`
  position: relative;
  margin: 0 auto;
  padding: 0;
`
const firstImage = css`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const image = css`
  ${firstImage};
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`

const RepeatingImage = ({ src, times = 5 }) => {
  const imageStyles = []
  for (let i = 1; i < times; i++) {
    const p = 50 / times * i
    const width = 100 - p
    imageStyles.push({
      width: `${width}%`,
      transform: `translate(${p / 2}%, ${p / 2}%)`,
    })
  }

  return (
    <div className={container}>
      <img src={src} className={firstImage} />
      {imageStyles.map((item, i) => (
        <img key={i} src={src} className={image} style={item} />
      ))}
    </div>
  )
}

RepeatingImage.propTypes = {
  src: PropTypes.string.isRequired,
}

export default RepeatingImage
