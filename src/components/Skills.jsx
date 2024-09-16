import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const Skills = () => {
    const skills=[
        {
            "name":"c",
            "image":"/public/c.svg"
        },
        {
            "name":"cpp",
            "image":"/public/cpp.svg"
        },
        {
            "name":"html",
            "image":"/public/html.svg"
        },
        {
            "name":"css",
            "image":"/public/css.svg"
        },
        {
            "name":"Tailwind CSS",
            "image":"/public/tailwind-css.svg"
        },
        {
            "name":"BootStrap",
            "image":"/public/bootstrap.svg"
        },
        {
            "name":"javascript",
            "image":"/public/javascript.svg"
        },
        {
            "name":"React",
            "image":"/public/react.svg"
        },
        {
            "name":"Node js",
            "image":"/public/nodejs.svg"
        },
        {
            "name":"Redux",
            "image":"/public/redux.svg"
        },
        {
            "name":"Mongodb",
            "image":"/public/mongodb.svg"
        },
        {
            "name":"git",
            "image":"/public/git.svg"
        },
        {
            "name":"Github",
            "image":"/public/github.svg"
        },
        {
            "name":"Socket io",
            "image":"/public/socket-io.svg"
        },
    ]
  return (
    <div className='mt-24 flex justify-center flex-wrap opacity-85 px-4'>
        {
            skills.map((item,index)=>(
                <Card shadow="sm" key={index} className='bg-transparent m-2 p-1' isPressable >
                    <CardBody className="overflow-visible p-2">
                    <Image
                        radius="lg"
                        width="100%"
                        alt={item.name}
                        className="w-full object-cover md:h-28 h-20 opacity-25"
                        src={item.image}
                    />
                    </CardBody>
                </Card>
            ))
        }
    </div>
  )
}

export default Skills
