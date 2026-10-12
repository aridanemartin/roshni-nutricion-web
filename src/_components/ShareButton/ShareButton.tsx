'use client'

import { useSyncExternalStore } from 'react'
import '@components/ShareButton/ShareButton.scss'
import {
  FacebookLegacyIcon,
  FacebookShareButton,
  WhatsappLegacyIcon,
  WhatsappShareButton,
  XLegacyIcon,
  XShareButton,
} from 'react-share'

export const ShareButton = () => {
  const currentUrl = useSyncExternalStore(
    () => () => {},
    () => window.location.href,
    () => '',
  )

  return (
    <>
      <div className="btn_wrap">
        <span className="shareButton__text">Compartir</span>
        <div className="container">
          <FacebookShareButton url={currentUrl}>
            <FacebookLegacyIcon round size={32} />
          </FacebookShareButton>
          <XShareButton url={currentUrl}>
            <XLegacyIcon round size={32} />
          </XShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappLegacyIcon round size={32} />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  )
}
