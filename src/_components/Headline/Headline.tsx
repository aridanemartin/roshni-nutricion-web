import './Headline.scss'

interface HeadlineProps {
  title: string
  subtitle?: string
  id?: string
}

const Headline = ({ title, subtitle, id }: HeadlineProps) => {
  return (
    <div className="headline" id={id}>
      <h2 className="headline__title">{title}</h2>
      {subtitle && <p className="headline__subtitle">{subtitle}</p>}
    </div>
  )
}

export default Headline
