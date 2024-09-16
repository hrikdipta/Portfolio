import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const Skills = () => {
    const skills=[
        {
            "name":"c",
            "image":"/c.svg"
        },
        {
            "name":"cpp",
            "image":"/cpp.svg"
        },
        {
            "name":"html",
            "image":"/html.svg"
        },
        {
            "name":"css",
            "image":"/css.svg"
        },
        {
            "name":"Tailwind CSS",
            "image":"/tailwind-css.svg"
        },
        {
            "name":"BootStrap",
            "image":"/bootstrap.svg"
        },
        {
            "name":"javascript",
            "image":"/javascript.svg"
        },
        {
            "name":"React",
            "image":"/react.svg"
        },
        {
            "name":"Node js",
            "image":"/nodejs.svg"
        },
        {
            "name":"Redux",
            "image":"/redux.svg"
        },
        {
            "name":"Mongodb",
            "image":"/mongodb.svg"
        },
        {
            "name":"git",
            "image":"/git.svg"
        },
        {
            "name":"Github",
            "image":"/github.svg"
        },
        {
            "name":"Socket io",
            "image":"/socket-io.svg"
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
