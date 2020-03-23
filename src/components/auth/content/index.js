import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../../../assets/img/img-1.jpg'
import img2 from '../../../assets/img/img-2.jpg'

const properties = {
  controls: false,
  indicators: false,
  interval: 10000,
}

function CarouselItemImage({ src }) {
  return (
    <div
      className="auth-content__image"
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}

export default function AuthContent(props) {
  return (
    <div className="auth-content">
      <Carousel className="carousel-fade" {...properties}>
        <Carousel.Item>
          <CarouselItemImage src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage src={img2} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
