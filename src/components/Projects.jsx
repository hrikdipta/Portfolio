import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
const Projects = () => {
    const projects = [
        {
            "title": "Blog Sphere",
            "image":'/project image/blogging.png',
            "description": "A full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It includes features such as OTP-based user authentication using JWT & OAuth, post liking and commenting, a search functionality, and an admin panel for content management. The platform is designed with RESTful APIs for smooth frontend-backend communication.",
            "link": "https://mern-blog-ah99.onrender.com/"
        },
        {
            "title": "ChatNexus",
            "image":"/project image/chatapp.jpg",
            "description": "A real-time chat application developed using React, Tailwind CSS, Node.js, Express.js, Socket.io, and MongoDB. It supports instant messaging, group chat, message history, and is designed to be responsive across different devices​.",
            "link": "https://mern-chat-app-1-z7l7.onrender.com/"
        }
    ]
    return (
        <div>
            <h2 className='text-3xl md:text-4xl font-Playpen-Sans py-8 text-gray-300'>Projects</h2>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    projects.map((item,index) => (
                        <Card key={index} className="max-w-[320px] m-4 px-2">
                            <CardHeader className="flex gap-3">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl max-h-22"
                                    src={item.image}
                                    width={270}
                                />
                            </CardHeader>
                                <Divider />
                            
                            <CardBody>
                                <h1 className='text-xl mb-2 text-gray-300'>{item.title}</h1>
                                <Divider />
                                <p className='text-base text-gray-300 text-justify'>{item.description}</p>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link
                                    isExternal
                                    showAnchorIcon
                                    href={item.link}
                                >
                                    Visit source code on GitHub.
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
