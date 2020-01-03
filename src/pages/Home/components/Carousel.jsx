import React, { useState } from 'react'

const Carousel = ({ sliderWidth, sliderHeight }) => {
  const slider = ["first", "second", "third", "fourth", "fifth"]
  const [activeIndex, setActiveIndex] = useState(1)
  const [left, setLeft] = useState(0)

  const prevSlide = function () {
    setActiveIndex(activeIndex - 1)
    setLeft(left + parseInt(sliderWidth))

    if (activeIndex === 1) {
      setActiveIndex(activeIndex + slider.length - 1)
      setLeft(left - sliderWidth * (slider.length - 1))
    }
  }
  const nextSlide = function () {
    setActiveIndex(activeIndex + 1)
    setLeft(left - sliderWidth)

    if (activeIndex === slider.length) {
      setActiveIndex(activeIndex - slider.length + 1)
      setLeft(0)
    }
  }
  const clickIndicator = function (e) {
    setActiveIndex(parseInt(e.target.textContent))
    setLeft(sliderWidth - parseInt(e.target.textContent) * sliderWidth)
  }

  const style = {
    left: left + 'vw',
    width: sliderWidth + 'vw',
    height: sliderHeight + 'px'
  }
  const sliderStyle = {width: slider.length * sliderWidth + 'vw'}

  const wrapperStyle = { width: sliderWidth + 'vw'}
  return (
    <div className="relative flex justify-center">
      <div className="slider-wrapper" style={wrapperStyle}>
        <ul style={sliderStyle}>
          {slider.map(function (item, index) {
            return (
              <li key={item} style={style} className={index + 1 === activeIndex ? 'slider-item' : 'hide'}>{item}</li>
            )
          })
          }
        </ul>
      </div>
      <div className="buttons-wrapper" style={wrapperStyle}>
        <button className="prev-button" onClick={prevSlide}></button>
        <button className="next-button" onClick={nextSlide}></button>
      </div>
      <div className="indicators-wrapper flex justify-center absolute inset-x-0 bottom-0">
        <ul className="indicators" style={wrapperStyle}>
          {slider.map(function (item, index) {
            return (
              <li key={item} className={index + 1 === activeIndex ? 'active-indicator' : ''} onClick={clickIndicator}>{index + 1}</li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Carousel