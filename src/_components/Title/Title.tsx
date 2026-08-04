import React from 'react'

type headingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
import '@components/Title/TitleComponent.scss'

interface TitleProps {
  children: React.ReactNode
  headingType: headingTypes
}

export const Title: React.FC<TitleProps> = ({ children, headingType }) => {
  const Heading = headingType
  return <Heading className="titleComponent">{children}</Heading>
}
