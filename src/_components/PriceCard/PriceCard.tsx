import Image from 'next/image'
import '@components/PriceCard/PriceCard.scss'
import SanityBlock from '@components/SanityBlock/SanityBlock'

interface PriceCardProps {
  title: string
  description: Array<{ _key: string }>
  price: number
  priceDiscount: number

  icon: string
}

export const PriceCard = ({
  title,
  description,
  price,
  priceDiscount,

  icon,
}: PriceCardProps) => {
  const renderDiscountBadge = () => (
      <div className="priceCard__discountBadge">
        <p>Ahorra {priceDiscount}€</p>
      </div>
    )

  const renderPrice = () => {
    if (priceDiscount) {
      return (
        <>
          <div className="priceCard__priceBefore">
            <p>Antes</p>
            <p className="priceCard__priceBefore-line-through">{price}€</p>
          </div>
          <p>
            <strong>{price - priceDiscount}</strong>€
          </p>
        </>
      )
    }

    return (
      <p>
        <strong>{price}€</strong>
      </p>
    )
  }

  return (
    <article className="priceCard">
      {priceDiscount && renderDiscountBadge()}
      <div
        className={`priceCard__image ${
          priceDiscount ? 'priceCard__image-discount' : ''
        }`}
      >
        <Image alt="Con Nutricion Saludable - Tarifas" fill src={icon} />
      </div>
      <h2 className="priceCard__title">{title}</h2>
      <div className="priceCard__price">{renderPrice()}</div>
      {/* <p className="priceCard__duration">
        <strong>{duration}</strong> min.
      </p> */}
      <div className="priceCard__description">
        {description.map((block) => <SanityBlock key={block._key} sanityContent={block} />)}
      </div>
    </article>
  )
}
