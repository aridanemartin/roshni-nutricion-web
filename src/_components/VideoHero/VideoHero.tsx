import React from 'react'

export const VideoHero = () => {
  return (
    <div className='video-hero'>
        <video
            className='video-hero__video'
            autoPlay
            loop
            muted
            playsInline
            poster='/assets/pictures/video-hero-poster.webp'
        >
            <source
            src='/assets/videos/video-hero.mp4'
            type='video/mp4'
            />
        </video>
        </div>
  )
}
