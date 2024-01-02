import React from 'react'
import { BiPhoneCall } from "react-icons/bi"
import { AiOutlineMail, AiFillFacebook, AiOutlineFacebook, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Footer = () => {
    return <>


        <div className="">

            <div className="bg-stone-900 py-8 lg:flex-row flex-col pt-10  px-14 gap-10 flex lg:gap-48 text-white">


                <div className="mb-11 flex lg:flex-row flex-col gap-11">

                    <div className="text-rose-500 font-semibold text-lg">
                        <h1>Call Us</h1>
                        <h1 className='cursor-pointer text-white flex items-center font-normal gap-1 mt-2'><BiPhoneCall /> <span>+91 8446414152</span></h1>


                        <h1 className='mt-6 '>Email</h1>
                        <h1 className='cursor-pointer text-white flex items-center gap-1 mt-2 font-normal'><AiOutlineMail /> <span>rahulmahato0852@gmail.com</span></h1>
                    </div>
                    <div className="">
                        <h1 className='text-xl font-semibold'>About US</h1>
                        <h1 className='text-md gap-3  flex flex-col mt-4 font-thin'>
                            <h1 className='cursor-pointer'>Our Story</h1>
                            <h1 className='cursor-pointer'>  Travel Blog & Tips</h1>
                            <h1 className='cursor-pointer'>   Working With Us</h1>
                            <h1 className='cursor-pointer'>Be Our Partner</h1></h1>
                    </div>


                </div>





                <div className="flex lg:flex-row flex-col gap-16 ">

                    <div className="">
                        <h1 className='text-xl font-semibold'>Support</h1>

                        <h1 className='text-md gap-3 flex flex-col mt-4 font-thin'>
                            <h1 className='cursor-pointer'>Customer Support</h1>
                            <h1 className='cursor-pointer'>Privacy & Policy</h1>
                            <h1 className='cursor-pointer'>Contact Channels</h1>
                            <h1 className='cursor-pointer btn btn-sm transition-all duration-500 rounded-lg bg-orange-400 font-bold text-center text-black mt-2'><Link to={"/Admin-login"}>Admin</Link></h1>
                        </h1>
                    </div>

                    <div className="">
                        <h1 className='text-lg font-bold'>Pay Safely With Us</h1>
                        <h1 className='lg:w-56 mt-4'>The payment is encrypted and transmitted securely with an SSL protocol.</h1>
                    </div>

                </div>

            </div>

            <div className="flex lg:justify-between gap-4 md:gap-36 px-5 w-full py-5 items-center text-white bg-black">
                <h1>2023 Travel Tour All Rights Reserved. </h1>
                <h1 className='flex gap-3 lg:gap-5'>Follow Us On<AiFillFacebook className='text-white h-7 rounded-full' />
                    <AiFillTwitterSquare className='text-white h-7 rounded-full' />
                    <AiFillLinkedin className='text-white h-7 rounded-full' />
                </h1>
            </div>


        </div>

    </>
}

export default Footer