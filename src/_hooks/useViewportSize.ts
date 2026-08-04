import { useState, useEffect } from 'react'

const useViewportSize = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const handleViewportSizeChange = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleViewportSizeChange)
    return () => {
      window.removeEventListener('resize', handleViewportSizeChange)
    }
  }, [])

  return [size.width, size.height]
}

export default useViewportSize
