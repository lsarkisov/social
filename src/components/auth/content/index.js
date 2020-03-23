import React, { useEffect } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import AuthNavbar from '../navbar'
import { REACT_APP_IMAGES_HOSTING } from '../../../const/api'

const properties = {
  controls: false,
  indicators: false,
  interval: 5000,
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
  const imgLen = 7

  useEffect(() => {
    Array.from(Array(imgLen).keys()).forEach((i) => {
      const img = new Image()
      img.src = `${REACT_APP_IMAGES_HOSTING}/img-${i + 1}.jpg`
    })
  }, [])

  return (
    <Row className="auth-content">
      <AuthNavbar />

      <Col lg={5}>
        <div className="auth-content__form">{props.children}</div>
      </Col>

      <Col lg={7}>
        <Carousel className="carousel-fade" {...properties}>
          {Array.from(Array(imgLen).keys()).map((i) => (
            <Carousel.Item key={`carousel-img-${i}`}>
              <CarouselItemImage
                className="carousel__item-1"
                src={`${REACT_APP_IMAGES_HOSTING}/img-${i + 1}.jpg`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  )
}
