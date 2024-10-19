import React from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";
import { GoMail } from "react-icons/go";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { Link } from '@nextui-org/react';
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='pt-20 pb-20 font-Playpen-Sans' name="contact">
            <h2 className='text-5xl'>Contact Me.</h2>
            <div className='flex md:flex-row flex-col-reverse max-w-md md:max-w-full mx-auto justify-between' >
                <div className='left  my-auto'>
                    <p className='text-2xl'>Get in Touch With Me</p>
                    <div className='flex flex-col gap-6 py-4 pl-3'>
                        <Link className='flex gap-3 items-center text-white' href="mailto:hrikdiptakundu123@gmail.com">
                            <GoMail className='text-xl hover:text-gray-300' />
                            <p>hrikdiptakundu123@gmail.com</p>
                        </Link>
                        <Link className='flex gap-3 items-center text-white' target="_blank" href='https://maps.app.goo.gl/k9Wzi4U428Ukp7zx7'>
                            <LiaMapMarkedAltSolid className='text-2xl hover:text-gray-300' />
                            <p className='text-wrap max-w-96'>RailWay Line Ghat Road, Nabadwip, Nadia, West Bengal, India 741302</p>
                        </Link>
                        <Link className='flex gap-3 items-center text-white' href='tel:+919800898317'>
                            <FaPhoneAlt className='text-white text-xl hover:text-gray-300' />
                            <p>+91-9800898317</p>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 mt-4 '>
                        <p className='text-2xl'>Connect With Me </p>
                        <div className='text-3xl flex items-center gap-5 pl-3'>
                            <a href='https://www.linkedin.com/in/hrikdipta-kundu/' target='_blank'><FaLinkedin className='cursor-pointer hover:text-gray-300' /></a>
                            <a href='https://github.com/hrikdipta' target='_blank'><FaSquareGithub className='cursor-pointer hover:text-gray-300' /></a>
                            <a href='https://www.instagram.com/hrikdiptakundu/' target='_blank'><FaSquareInstagram  className='cursor-pointer hover:text-gray-300' /></a>
                            <a href='https://www.facebook.com/profile.php?id=100072202299973' target='_blank'><FaSquareFacebook className='cursor-pointer hover:text-gray-300' /></a>
                        </div>
                    </div>
                </div>
                <div className='right mb-10 md:'>
                    <div className='flex items-center justify-center '>
                        <form className="flex flex-col max-w-md flex-wrap md:flex-nowrap gap-4 items-center  py-6 px-4 rounded-2xl border-gray-500" onSubmit={handleSubmit}>
                            <div className='flex w-full flex-wrap md:flex-nowrap gap-2'>
                                <Input isRequired type="text" label="FirstName" placeholder="First Name" labelPlacement="outside" />
                                <Input isRequired type="text" label="LastName" placeholder="Last Name" labelPlacement="outside" />
                            </div>
                            <Input isRequired type="email" label="email" placeholder="Your email" labelPlacement="outside" />
                            <Textarea
                                isRequired
                                label="Message"
                                labelPlacement="outside"
                                placeholder="Message"
                                className="w-full"
                            />
                            <Button type='submit' color="primary" className='w-full'>
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
