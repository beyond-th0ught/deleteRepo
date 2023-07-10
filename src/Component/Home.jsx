import React from 'react'
import Weel from '../assetes/wheel.png'
import Car from '../assetes/tejas2.jpg'
import Papa from "../assetes/papa.jpg"
import Mummy from "../assetes/mummy.jpg"
import Sister from "../assetes/gauri.jpg"
import Khushboo from "../assetes/khushboo.jpg"

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
            Tejas is an experienced full-stack web developer with 3 years of expertise. He specializes in using ReactJS, HTML, CSS, JavaScript, Node.js, MongoDB, Prisma, Express, and AWS for website development. With his strong frontend skills and proficiency in backend technologies, he crafts dynamic and visually appealing web applications. Tejas's knowledge of MongoDB and Prisma enables efficient data management, while his experience with AWS ensures scalable and secure deployment. Collaborative and committed to continuous learning, Tejas delivers comprehensive web solutions that meet client needs and deliver a seamless user experience.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
        <div>
            <img src={Car} alt="" />
            <h1>
            Who I'am
            </h1>
        </div>
        <p>
        Tejas is an experienced full-stack web developer with three years of professional experience. He has a strong command over a diverse set of technologies and tools, enabling him to deliver comprehensive web solutions. His expertise includes working with ReactJS, HTML, CSS, JavaScript, Node.js, MongoDB, Prisma, Express, and AWS for website development.

Tejas has extensive knowledge of ReactJS, a popular JavaScript library for building user interfaces. He utilizes ReactJS to create interactive and dynamic frontend components, ensuring an excellent user experience. With his expertise in HTML and CSS, Tejas crafts well-structured and visually appealing web pages that are responsive across different devices.

In terms of backend development, Tejas excels in working with Node.js. He leverages the power of Node.js to build scalable and efficient server-side applications. Tejas is proficient in using Express, a minimalistic web application framework for Node.js, to create robust APIs and handle routing and middleware tasks.

For data storage, Tejas is well-versed in MongoDB, a NoSQL database, which allows for flexibility and scalability in handling large amounts of data. He is skilled in using Prisma, an Object-Relational Mapping (ORM) tool, to interact with the database and perform efficient data operations.

Tejas also has experience with AWS (Amazon Web Services), a cloud computing platform. He utilizes AWS services such as EC2 for virtual server hosting, S3 for storing and retrieving data, and Lambda for serverless computing, to deploy and manage web applications in a scalable and secure manner.

Throughout his three years of experience, Tejas has honed his problem-solving skills and gained a deep understanding of the entire web development process. He has collaborated with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality web solutions. Tejas is committed to continuous learning and stays updated with the latest trends and best practices in web development to ensure he provides innovative and efficient solutions to his clients or projects.

With his comprehensive skill set and expertise in utilizing a wide range of technologies, Tejas is a valuable asset as a full-stack web developer, capable of delivering end-to-end web solutions with exceptional functionality and user experience.
        </p>
        </div>
    </div>
    <div className="home4 id=family" id="family">
        <div className="">
            <h1>Family</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s", overflow:"hidden"
                }}>
                <img style={{width:"60%"}} src={Papa} alt="" />
                <p>Vijay Thaakre</p>
                </div>
                <div style={{
                    animationDelay:"0.5s", overflow:"hidden"
                }}>
                <img style={{width:"60%"}} src={Mummy} alt="" />
                <p>Vanita Thaakre</p>
                </div>
                <div style={{
                    animationDelay:"0.7s", overflow:"hidden"
                }}>
                <img style={{width:"60%"}} src={Sister} alt="" />
                <p>Sneha Thaakre</p>
                </div>
                <div style={{
                    animationDelay:"1s", overflow:"hidden"
                }}>
                <img style={{width:"60%"}} src={Khushboo} alt="" />
                <p>Khushboo Yadav</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home