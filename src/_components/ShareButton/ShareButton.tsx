'use client'

import { useEffect, useState } from 'react'
import './ShareButton.scss'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share'

export const ShareButton = () => {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  return (
    <>
      <div className="btn_wrap">
        <span className="shareButton__text">Compartir</span>
        <div className="container">
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <XIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  )
}
