import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import Services1 from '../assetes/web_devloper.png'
import Services2 from '../assetes/amazon.png'
import Services3 from '../assetes/mongodb.png'
import Services4 from '../assetes/blockchain.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
    <div >

        <Carousel
        infiniteLoop 
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}
        
        >
            <div>
                <img style={{width:"50%"}} src={Services1} alt="" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img style={{width:"50%"}} src={Services2} alt="" />
                <p className='legend'>Amazon</p>
            </div>
            <div>
                <img style={{width:"50%"}} src={Services3} alt="" />
                <p className='legend'>Database</p>
            </div>
            <div>
                <img style={{width:"50%"}} src={Services4} alt="" />
                <p className='legend'>BlockChain Developer</p>
            </div>
            
        </Carousel>
    </div>
  )
}

export default Services