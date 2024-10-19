import React from 'react'

const AboutMe = () => {
  return (
    <div className='mb-4' name="about">
      <div>
        <h2 className='text-3xl md:text-4xl font-Playpen-Sans py-8 text-gray-300'>About Me.</h2>
      </div>
      <div className='font-Playpen-Sans text-justify text-wrap'>
        <p >
        Hello! I’m Hrikdipta Kundu, currently pursuing a B.Tech in Electrical Engineering from NIT Durgapur. With a strong foundation in programming languages like C, C++, and JavaScript, I have developed a keen interest in web development. My expertise lies in building full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js), with a focus on creating seamless user experiences.
        </p>
        <br></br>
        <p>
        I've built projects such as Blog Sphere, a modern blogging platform with secure user authentication, comment features, and an admin panel, and ChatNexus, a real-time chat application with group chat capabilities and message history. These projects have allowed me to sharpen my skills in responsive design, RESTful APIs, and real-time communication using WebSockets.
        </p>
        <br></br>
        <p>Feel free to explore my work or reach out to me for collaboration and exciting opportunities!</p>
      </div>
    </div>
  )
}

export default AboutMe
