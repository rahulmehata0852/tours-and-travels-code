import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { FcCallback } from "react-icons/fc"
import { GiCommercialAirplane } from "react-icons/gi"
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { BiLock, BiLogoFlickrSquare, BiPhoneCall, BiSearch, BiUserCheck } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { HiBars3BottomLeft } from "react-icons/hi2"
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, invalidate } from '../redux/Slices/Slices'
import { toast } from 'react-toastify'
import { TbJewishStarFilled } from 'react-icons/tb'
import { motion } from "framer-motion"
import titleImg from "./../../Sahara Image_files/title.png"
import { GetWishList } from '../redux/actions/Action'
const Navbar = () => {



    const [navbarDrop, setnavbarDrop] = useState(false)

    const { auth, LoggedOut, wish, whishListed } = useSelector(state => state.users)
    const dispatch = useDispatch()



    useEffect(() => {
        if (LoggedOut) {
            toast.error("Log Out Successfully")
        }

    }, [LoggedOut])


    useEffect(() => {
        dispatch(GetWishList(auth && auth.id))
        dispatch(invalidate())
    }, [whishListed, auth])



    return <>

        <div className="z-[9999]">

            {/*St Top Bar Email and mobile no.. fb tw Login Sign Up */}

            <div className=" lg:p-4 p-3  bg-slate-100 border border-slate-600 flex items-center gap-11 justify-between w-full">


                <div className="flex items-center gap-5  justify-between lg:w-[97%]">

                    <div className="lg:flex items-center hidden gap-5">

                        <h1 className='flex items-center  gap-1'><BiPhoneCall />+91 8446414152</h1>
                        <h1 className='flex items-center  gap-1'><AiOutlineMail />rahulmahato@gmail.com</h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <h1><FaFacebookF className='bg-white opacity-70 text-base' /></h1>
                        <h1><BiLogoFlickrSquare className='bg-white opacity-70 text-xl' /></h1>
                        <h1><AiOutlineTwitter className='bg-white opacity-70 text-xl' /></h1>
                    </div>


                </div>

                {
                    auth ? <div className='flex items-center gap-5'>

                        <div className="">
                            <h1 onClick={() => document.getElementById('my_modal_1').showModal()} className='font-medium px-4 p-2  cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>{auth && auth.name}</h1>
                            <dialog id="my_modal_1" className="modal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                                <div className="modal-box">
                                    <h3 className="font-bold text-2xl cursor-pointer text-rose-600  flex gap-5 items-center ">!Hello {auth.name} </h3>
                                    <p className="py-4 font-medium text-xl flex items-center gap-2">Welcome To Travel Tours <GiCommercialAirplane /> </p>
                                    <div className="flex flex-col gap-2 mt-5">

                                        <span className='flex  gap-2 font-medium'><span>UserName:</span>{auth.uname}</span>
                                        <span className='flex  gap-2 font-medium'><span>Name:</span>{auth.name}</span>
                                        <span className='flex  gap-2 font-medium'><span>LastName:</span>{auth.lname}</span>
                                        <span className='flex  gap-2 font-medium'><span>Mobile:</span>{auth.mobile}</span>
                                        <span className='flex  gap-2 font-medium'><span>email:</span>{auth.email}</span>
                                        <span className='flex  gap-2 font-medium'><span>State:</span>{auth.state}</span>
                                        <span className='flex  gap-2 font-medium'><span>DOB:</span>{auth.DOB}</span>
                                    </div>
                                    <div className="">



                                    </div>

                                    <div className="modal-action">
                                        <form className='gap-3 flex' method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-neutral">Close</button>
                                            <button onClick={e => dispatch(LogOut())} className="btn btn-warning">Log Out</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>



                        </div>

                        <div className="w-full p-0">

                            <h1 className="cursor-pointer text-red-500 font-bold" onClick={() => window.my_modal_3.showModal()}>Log Out</h1>
                            <dialog id="my_modal_3" className="modal">
                                <form method="dialog" className="modal-box bg-orange-500">
                                    <button className="btn btn-sm border-none btn-circle text-xl btn-ghost absolute right-2 top-2">✕</button>
                                    <h3 className="font-bold text-lg">Heyy!</h3>
                                    <p className="py-4 font-bold  text-2xl">Are You Sure To Log Out</p>
                                    <div className="flex justify-end gap-2">
                                        <button className='bg-white text-center btn'>cancle</button>
                                        <button onClick={e => dispatch(LogOut())} className='bg-green-500 hover:bg-red-500  text-center btn'>Log Out</button>
                                    </div>

                                </form>
                            </dialog>
                        </div>


                    </div>
                        : <div className=''>

                            <div className="flex gap-6 items-center lg:w-[15%] ">
                                <Link to={"/login"} className='opacity-75 flex items-center gap-1 font-bold'><BiLock className='text-xl' /> Login</Link>
                                <Link to={"/register"} className='opacity-75 flex items-center  font-bold'><BiUserCheck className='text-2xl' /><Link to={"/register"}> Sign Up</Link></Link>
                            </div>
                        </div>
                }



            </div>
            {/*End Top Bar Email and mobile no.. fb tw Login Sign Up */}


            {/* MainNavbar st */}

            <div className="bg-transparent ">

                <motion.div
                    initial={{ opacity: 0, translate: "100%", }}
                    animate={{ opacity: 1, translate: "0", }}
                    transition={{ duration: 2 }}
                    className="flex  lg:gap-80 md:gap-64 justify-between lg:justify-normal mt-3 ps-9 p-6 ">


                    <motion.div
                        transition={{ delay: 0.1 }}
                        className="">
                        <img className='chat-image w-40 ' src={titleImg} alt="sa" title="logo-v3" />
                    </motion.div>



                    <motion.div

                        className="hidden lg:flex items-center justify-end gap-6">
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className='underline transition-all duration-500 font-bold cursor-pointer text-sm'><Link to={"/"}>HOME</Link></motion.h1>
                        <h1 className='font-semibold dropdown hover:underline transition-all duration-500 hover:font-bold cursor-pointer text-sm'>

                            <div

                                className="dropdown dropdown-hover">
                                <label tabIndex={0} className=" m-1">PAGES</label>
                                <ul tabIndex={0} className="dropdown-content  menu bg-base-100 p-2 shadow text-black rounded-box w-52">
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/"}>Home</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/tours-list"}>Tour List</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/tour-search"}>Tour Search</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/destination"}>Destination</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/bookings"}>My Bookings</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200' onClick={() => document.getElementById('my_modal_1').showModal()}><Link>Profile</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/blog"}>Blog</Link></li>
                                    <li className='hover:bg-white rounded-lg transition-all duration-200'><Link to={"/whishlist"}>Whishlist</Link></li>
                                </ul>
                            </div>


                        </h1>
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 1.2, duration: 0.3 }}
                            className='font-semibold hover:underline transition-all duration-500 hover:font-bold cursor-pointer text-sm'><Link to="/tours-list">TOUR LIST</Link></motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 1.6, duration: 0.3 }}
                            className='font-semibold hover:underline transition-all duration-500 hover:font-bold cursor-pointer text-sm'><Link to="/tour-search">TOUR SEARCH</Link></motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 2, duration: 0.3 }}
                            className='font-semibold hover:underline transition-all duration-500 hover:font-bold cursor-pointer text-sm'><Link to={"/destination"}>DESTINATION</Link></motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 2.4, duration: 0.3 }}
                            className='font-semibold hover:underline transition-all duration-500 hover:font-bold cursor-pointer text-sm'><Link to={"/bookings"}>My Bookings</Link></motion.h1>

                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 2.8, duration: 0.3 }}
                            className='font-semibold hover:underline transition-all duration-500 hover:font-bold cursor-pointer text-sm'><Link to={"/blog"}>BLOG</Link></motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 3.2, duration: 0.3 }}
                            className='font-semibold text-xl'><BiSearch /></motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, translate: "100%", }}
                            animate={{ opacity: 1, translate: "0", }}
                            transition={{ delay: 3.6, duration: 0.3 }}
                        >

                            <Link to={"/whishlist"} className='font-semibold cursor-pointer text-yellow-400 text-2xl flex'>
                                <div className="indicator gap-2 ">
                                    {
                                        wish &&
                                        <span className="indicator-item animate-pulse badge badge-secondary">{wish && wish.length}</span>
                                    }

                                    <button ><TbJewishStarFilled /></button>
                                </div>

                            </Link>
                        </motion.h1>
                    </motion.div>


                    {/* DropDown Of navbar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, }}
                        className=" lg:hidden flex   items-center gap-4">
                        <h1 className='font-semibold text-2xl'><BiSearch /></h1>
                        <div className=" dropdown">
                            <button><HiBars3BottomLeft className='text-2xl ' /></button>
                            <div

                                className="z-[99999999999999]  dropdown-content relative rounded-lg mx-auto right-[0] mt-4 bg-black text-white px-20   py-6 flex flex-col gap-5">
                                <Link to={`/`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>HOME</Link>
                                <Link to={`/`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>PAGES</Link>
                                <Link to={`/tours-list`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>TOUR LIST</Link>
                                <Link to={`/tour-search`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>TOUR SEARCH</Link>
                                <Link to={`/destination`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>DESTINATION</Link>
                                <Link to={"/bookings"} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>My Bookings</Link>
                                <Link className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs' onClick={() => document.getElementById('my_modal_1').showModal()}>Profile</Link>

                                <Link to={`/blog`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>BLOG</Link>
                                <Link to={`/whishlist`} className='w-full font-semibold hover:underline transition-all duration-300 hover:text-orange-500 hover:font-bold cursor-pointer text-xs'>WishList</Link>
                            </div>




                        </div>

                    </motion.div>



                </motion.div>


            </div >




            {/* MainNavbar End */}


        </div >


    </>
}

export default Navbar