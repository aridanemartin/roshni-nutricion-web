'use client'

import dynamic from 'next/dynamic'

// Carousel reads window size on first render, so it can only run in the browser
const ClientCarousel = dynamic(() => import('@components/Carousel/Carousel'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default ClientCarousel
