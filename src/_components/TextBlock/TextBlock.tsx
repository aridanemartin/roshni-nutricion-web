import { ReactNode } from 'react'
import './TextBlock.scss'

interface TextBlockProps {
  title: string
  children: ReactNode
}

const TextBlock = ({ title, children }: TextBlockProps) => {
  return (
    <div className="textBlock">
      <h2 className="textBlock__title">{title}</h2>
      <div className="textBlock__text">{children}</div>
    </div>
  )
}

export default TextBlock
