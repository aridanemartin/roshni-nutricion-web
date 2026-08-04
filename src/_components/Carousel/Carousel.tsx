'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import '@components/Carousel/Carousel.scss'
import useViewportSize from 'src/_hooks/useViewportSize'
import Image from 'next/image'

export interface CarouselProps {
  spaceBetween?: number
  services?: {
    title: string
    list: string[]
    img: string
    alt: string
  }[]
}

const Carousel = ({ services, spaceBetween }: CarouselProps) => {
  const [width] = useViewportSize()
  let slidesPerView = 1
  const slidesPerViewMobile = 1
  const slidesPerViewTablet = 2
  const slidesPerViewDesktop = 3

  if (width <= 768) {
    slidesPerView = slidesPerViewMobile
  } else if (width <= 1024) {
    slidesPerView = slidesPerViewTablet
  } else {
    slidesPerView = slidesPerViewDesktop
  }

  return (
    <section className="carousel">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween || 30}
      >
        {services?.map((service) => (
          <SwiperSlide key={service.alt}>
            <article className="carousel__slide">
              <div className="carousel__slide-title">
                <h3>{service.title}</h3>
              </div>
              <div className="carousel__slide-image">
                <Image
                  alt={service.alt}
                  height={200}
                  src={service.img}
                  width={200}
                />
              </div>
              <ul>
                {service.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel
