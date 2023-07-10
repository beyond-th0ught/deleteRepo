import React from 'react'
import Weel from '../assetes/wheel.png'
import Car from '../assetes/web_devloper.png'
import {AiFillGoogleCircle,AiFillInstagram,AiFillYoutube,AiFillAmazonCircle} from "react-icons/ai"

const Home = () => {
  return (
    <>
        <div className="home" id='home'>
        <main>
            
            <div><img src={Weel} className='logo' alt="" /> <h1>Tejas Thakare</h1></div>
            <p>Tejas & Tech on Khushboo's website</p>
        </main>
    </div>
    <div className="home2">
        <img src={Car} alt="" />
        <div>
            <p>
                A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
        <h1>Who I'am</h1>
        <p>
        A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 
        A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 
        A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 
        A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 
        A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 
        A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end the parts of a website a user sees and interacts with and the back end the behind-the-scenes data storage and processing require different skill sets 

        </p>
        </div>
    </div>
    <div className="home4 id=family" id="family">
        <div className="">
            <h1>Family</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                <AiFillGoogleCircle/>
                <p>Vijay Thaakre</p>
                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>
                <AiFillAmazonCircle/>
                <p>Vanita Thaakre</p>
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                <AiFillYoutube/>
                <p>Sneha Thaakre</p>
                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                <AiFillInstagram/>
                <p>Khushboo Yadav</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home