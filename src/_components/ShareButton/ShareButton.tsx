'use client'

import { useEffect, useState } from 'react'
import '@components/ShareButton/ShareButton.scss'
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
            <FacebookIcon round size={32} />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <XIcon round size={32} />
          </TwitterShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon round size={32} />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  )
}
