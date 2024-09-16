import React from 'react'
import {Button,Link} from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';
import {Image} from "@nextui-org/react";
import iamage from '../assets/Image.jpeg'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='text-5xl h-full flex justify-between mt-40 font-Playpen-Sans text-gray-300 md:max-w-4xl lg:max-w-7xl mx-auto pl-3 md:pl-10'>
            <div className=''>
                <div className='mb-5'>
                    <p className=''>Hi! I am Hrik</p>
                </div>
                <div className='h-28'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am a Student',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I am a Programmer',
                            1000,
                            'I am a Front End Developer',
                            1000,
                            'I am a Back End Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '3rem', display: 'inline-block', lineHeight: 1 }}
                        repeat={Infinity}
                    />
                </div>
                <Button radius="full" className="bg-gradient-to-tr mt-8 from-pink-500 to-yellow-500 text-white shadow-lg  flex ">
                    <Link  target='blank' href="https://drive.google.com/file/d/1vpvlOtKTNfMBJd02uCdKwVAGz6b4qHwW/view?usp=sharing">
                        Download CV
                    </Link>
                    <FaRegArrowAltCircleDown />
                </Button>
            </div>
            <div className='mr-10  hidden md:block'>
                <Image
                    width={270}
                    src={iamage}
                    alt="My Picture"
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default Hero
