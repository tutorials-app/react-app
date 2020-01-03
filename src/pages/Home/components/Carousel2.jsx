import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Carousel2 = () => {
  const items = [
    'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
    'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
    'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
    'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
    'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'
  ]
  const [current, setCurrent] = useState(0)
  const [isNext, setIsNext] = useState(true)

  const handlerPrev = async () => {
    let index = current,
      length = items.length

    if (index < 1) index = length

    index--
    await setIsNext(false)
    setCurrent(index)
  }

  const handlerNext = async () => {
    let index = current,
      length = items.length - 1

    if (index === length) index = -1
    index++

    await setIsNext(true)
    setCurrent(index)
  }

  const goToHistoryClick = async (curIndex, index) => {
    let next = (curIndex < index)
    await setIsNext(next)
    setCurrent(index)
  }

  return (
    <div className="app mt-2">
      <div className="carousel">
        <TransitionGroup className="carousel-group" mode="out-in">
          {current >= 0 && <CSSTransition 
            key={items[current]}
            classNames={{
              enter: isNext ? 'enter-next' : 'enter-prev',
              enterActive: 'enter-active',
              exit: 'leave',
              exitActive: isNext ? 'leave-active-next' : 'leave-active-prev'
            }}
            timeout={500}
          >
            <div className="carousel_slide" key={current}>
              <img src={items[current]} alt="" />
            </div>
          </CSSTransition>}
        </TransitionGroup>
        <button className="carousel_control carousel_control__prev" onClick={handlerPrev}><span></span></button>
        <button className="carousel_control carousel_control__next" onClick={handlerNext}><span></span></button>
        <div className="carousel_history">
          <History
            current={current}
            items={items}
            changeSilde={goToHistoryClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel2


export const History = ({ current, items, changeSilde }) => {
  const listItems = items.map((el, index) => {
    const name = (index === current) ? 'active' : '';
    return (
      <li key={index}>
        <button
          className={name}
          onClick={() => changeSilde(current, index)}
        ></button>
      </li>
    )
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}
