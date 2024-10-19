import React from 'react'
import {Button,Link} from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';
import {Image} from "@nextui-org/react";
import iamage from '../assets/Image.jpeg'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='text-5xl md:h-screen  flex justify-between pt-40 pb-40 md:pb-0 font-Playpen-Sans text-gray-300 md:max-w-4xl lg:max-w-7xl mx-auto '>
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
                <div className='max-w-36'>
                    <Button 
                        href="https://drive.google.com/file/d/1vpvlOtKTNfMBJd02uCdKwVAGz6b4qHwW/view?usp=sharing"
                        as={Link}
                        target='blank'
                        radius="full" className="bg-gradient-to-tr mt-8 from-pink-500 to-yellow-500 text-white shadow-lg text-sm flex"
                    >
                        Download CV
                        <FaRegArrowAltCircleDown className='text-base'/>
                    </Button>   
                </div>
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
