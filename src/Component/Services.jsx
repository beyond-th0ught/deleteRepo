import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import Services1 from '../assetes/truck1.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
    <div >

        <Carousel
        infiniteLoop 
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
        >
            <div>
                <img src={Services1} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={Services1} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={Services1} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={Services1} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            
        </Carousel>
    </div>
  )
}

export default Services