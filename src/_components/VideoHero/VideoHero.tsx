import React from 'react'

export const VideoHero = () => (
    <div className='video-hero'>
        <video
            autoPlay
            className='video-hero__video'
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
