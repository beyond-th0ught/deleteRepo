import React from 'react'
import {AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>Tejas&Tech</h1>
            <p>@all right reserved</p>
        </div>

        <div>
            <h5>Follow</h5>
            <div>
              <div>
                <AiFillYoutube/>
                <a href="https://www.youtube.com/@UniversbeCREATIONS" target='blank'>Youtube</a>  
              </div>
              <div>
                <AiFillFacebook/>
                <a href="https://www.facebook.com/people/Tejas-thakare/100076127268734/" target='blank'>FaceBook</a>
              </div>  
              <div>
                <AiFillInstagram/>
                <a href="https://www.instagram.com/thakare_tejas_23/?hl=en" target='blank'>Instagram</a>
                
              </div>
              <div>
                <AiFillGithub/>
                <a href="https://github.com/ttejas123" target='blank'>GitHub</a>
              </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer