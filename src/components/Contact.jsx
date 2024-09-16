import React from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";
const Contact = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className='flex items-center justify-center mt-20'>
            <form className="flex flex-col max-w-md flex-wrap md:flex-nowrap gap-4 items-center border-2 py-6 px-4 rounded-2xl border-gray-500" onSubmit={handleSubmit}>
                <div className='flex w-full flex-wrap md:flex-nowrap gap-2'>
                    <Input isRequired type="text" label="FirstName" placeholder="First Name" labelPlacement="outside"/>
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
                <Button type='submit' color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Contact
