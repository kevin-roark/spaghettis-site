import React from 'react'
import PropTypes from 'prop-types'

const LoopVideo = ({ src, className, style }) => {
  const videoRef = video => {
    video.addEventListener('ended', () => {
      video.pause()
      video.currentTime = 0
      video.play()
    })
  }

  return (
    <video
      className={className}
      style={style}
      autoPlay
      loop
      preload
      playsInline
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

LoopVideo.propTypes = {
  src: PropTypes.string.isRequired,
}

export default LoopVideo
