import { ReactNode } from 'react'
import '@components/TextBlock/TextBlock.scss'

interface TextBlockProps {
  title: string
  children: ReactNode
}

const TextBlock = ({ title, children }: TextBlockProps) => (
    <div className="textBlock">
      <h2 className="textBlock__title">{title}</h2>
      <div className="textBlock__text">{children}</div>
    </div>
  )

export default TextBlock
