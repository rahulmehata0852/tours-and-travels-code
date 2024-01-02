import React, { useRef, useState } from 'react'
import { BiSearch, BiSolidQuoteAltLeft } from 'react-icons/bi'
import { FaEarthAmericas, FaUsersGear } from 'react-icons/fa6'
import { LuBadgePercent } from 'react-icons/lu'
import { BsArrowRight } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import { AiFillThunderbolt, AiTwotoneStar } from 'react-icons/ai'
import Footer from './Footer'
import Rahul from "../../Rahulsai.jpg"
import { motion } from "framer-motion"
import Tower from "../../Tower.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GetSearchTours } from '../redux/actions/Action'

const Home = () => {

    const [useresponse, setuseresponse] = useState({

    })
    const [hover, sethover] = useState(false)
    const [hover1, sethover1] = useState(false)
    const [hover2, sethover2] = useState(false)
    const [hover3, sethover3] = useState(false)
    const [hover4, sethover4] = useState(false)

    const [carousel, setcarousel] = useState(0)

    const navi = useNavigate()

    const dispacth = useDispatch()
    const SearchTour = e => {
        if (Object.keys(useresponse).length === 0) {
            navi("/tour-search")
        } else {
            navi("/book-tours")
            dispacth(GetSearchTours(useresponse))
        }
    }

    const handleChange = e => {
        setuseresponse({ ...useresponse, [e.target.name]: e.target.value })
    }




    return <>


        <div className="mb-20 ">
            <div className="">
                {/* Bg Image and orange box st */}
                <div style={{ backgroundImage: `url(${Tower})` }} className={`m-3 pt-20 md:px-32  px-7 bg-cover h-screen `}>

                    <div

                        initial={{ translateY: "100%", opacity: 0 }}
                        animate={{ translateY: "0", opacity: 1, }}
                        transition={{ duration: 2.2, delay: 2 }}

                        className='z-[0]'

                    >
                        <h1
                            className=' z-[0] text-center font-bold text-white text-5xl '>Find Next Place To Visit</h1>
                        <h1
                            // initial={{ translateY: "100%", opacity: 0 }}
                            // animate={{ translateY: "0", opacity: 1, }}
                            // transition={{ duration: 2.2, delay: 2 }}
                            className='z-[0] text-center pt-7 text-white text-2xl'><b className='md:text-black'>Discover</b> amzaing places at exclusive deals</h1>
                    </div>

                    <div

                        className="mt-7 md:mt-16 flex flex-col gap-2 justify-center  md:flex-row">

                        <div className="bg-white  px-4 rounded w-auto input-group">
                            <input className='md:w-auto  w-full h-12 ps-1 rounded' placeholder='Keywords' type="text" name="" id="" />
                            <span className='bg-white'><BiSearch className='bg-white' /></span>
                        </div>

                        <div className="md:w-[20%]">
                            <select name='Place' onChange={handleChange} className="select rounded-sm select-bordered w-full h-12">
                                <option disabled selected>Destination</option>
                                <option value={"Kedarnath"}>Kedarnath</option>
                                <option value={"Taj Mahal"}>Taj Mahal</option>
                                <option value={"The Red Front"}>The Red Front</option>
                                <option value={"Ajanta Caves"}>Ajanta Caves</option>
                                <option value={"Mahabaleshwar"}>Mahabaleshwar</option>
                            </select>
                        </div>

                        <div className="md:w-[20%]">
                            <select onChange={handleChange} name='time' className="select rounded-sm select-bordered w-full h-12">
                                <option disabled selected>Duration</option>
                                <option value={"5 hours"}>5 hours Tour</option>
                                <option value={"12 hours"}>12 hours Tour</option>
                                <option value={"24 hours"}>24 hours Tour</option>
                                <option value={"3 days"}>3 days Tour</option>
                                <option value={"More Than 3 days"}>More Than 3 days</option>
                            </select>
                        </div>
                        <button onClick={e => SearchTour()} className="btn  md:w-40 w-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 hover:font-bold">Search</button>


                    </div>


                </div>

                <div className="md:px-10 relative md:bottom-11 bottom-4">
                    <div className="py-8 md:px-5 rounded-md  flex flex-col gap-9 md:flex-row pt-16 text-white bg-orange-500">

                        <div className="flex gap-8 mx-auto">
                            <h1><FaEarthAmericas className='text-5xl' /></h1>
                            <div className="md:w-auto w-40">
                                <h1 className='text-lg font-bold'>700+ DESTINATIONS</h1>
                                <h1 >Our expert team handpicked all destinations in this site</h1>
                            </div>
                        </div>

                        <div className="flex gap-8 mx-auto">
                            <h1><LuBadgePercent className='text-5xl' /></h1>
                            <div className="md:w-auto w-40">
                                <h1 className='text-lg font-bold'>BEST PRICE GUARANTEE</h1>
                                <h1 >Price match within 48 hours of order confirmation</h1>
                            </div>
                        </div>

                        <div className="flex gap-8 mx-auto">
                            <h1><FaUsersGear className='text-5xl' /></h1>
                            <div className="md:w-auto w-40">
                                <h1 className='text-lg font-bold'>TOP NOTCH SUPPORT</h1>
                                <h1 >We are here to help, before, during, and even after your trip.</h1>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Bg image end and orange box */}


                {/* Porpular Destination start */}


                <div className="mt-14">


                    <div className="text-center mx-auto">
                        <h1 className='text-4xl font-bold '>Popular Destinations</h1>
                        <Link to={"/tours-list"} className='text-red-500 font-medium mt-7 text-base flex items-center gap-3 justify-center'>View All Destinations <BsArrowRight className='text-xl font-extrabold' /></Link>

                    </div>

                    <div className="md:p-5 p-5">

                        {/* 2images 3t and 2t st */}

                        <div className="flex  md:flex-row flex-col gap-8 w-full">




                            <div onMouseLeave={e => sethover(false)} onMouseEnter={e => sethover(true)} className="rounded-md h-96 md:w-[75%] w-auto  bg-[url('https://media.istockphoto.com/id/628365610/photo/vltava-river-and-charles-bridge-in-prague.jpg?s=1024x1024&w=is&k=20&c=CKhMGWe806ZGqz5sSNQchCeGigFQxH5iMQdpdtzcMtQ=')]">

                                <div className={`${hover === true && "bg-black h-full   bg-opacity-60 transition-all duration-500"}`}>

                                    <h1 className='p-4 text-right'><span className='bg-orange-500  px-3 p-1 rounded-md text-white'>3 tours</span></h1>

                                    <h1 className={`transition-all  ${hover === true && "text-info relative md:bottom-40"} duration-1000 text-center md:mt-56 mt-10 text-white font-bold text-2xl`}>Western Europe</h1>
                                    <div className={`mt-2 md:mt-0 transition-all duration-300 text-center ${hover === true && "relative md:bottom-28 transition-all duration-1000"}`}>
                                        <div className={`${hover === true ? "block transition-all duration-1000" : ""}`}>
                                            <h1 className={`text-lg transition-all duration-1000 text-white mx-12 ${hover === true ? "block" : "hidden"}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</h1>

                                            <Link to={"/tour-search"} className={`font-bold cursor-pointer ${hover === true && "opacity-100"} opacity-0 text-red-500 mt-10 hover:scale-105`}>VIEW ALL TOURS</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>






                            <div onMouseLeave={e => sethover1(false)} onMouseEnter={e => sethover1(true)} className={`z-[1000] h-96 md:w-[35%] w-auto bg-[url('https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25vdyUyMGV5b3Vyb3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')]`}>

                                <div className={`${hover1 === true && "bg-black h-full   bg-opacity-60 transition-all duration-500"}`}>

                                    <h1 className='p-4 text-right'><span className='bg-orange-500  px-3 p-1 rounded-md text-white'>3 tours</span></h1>

                                    <h1 className={`transition-all text-yellow-400 ${hover1 === true && "relative md:bottom-48"} duration-1000 text-center md:mt-56 mt-10 text-white font-bold text-2xl`}>Scandinavia</h1>
                                    <div className={`mt-2 md:mt-0 transition-all duration-300 text-center ${hover1 === true && "relative md:bottom-44 transition-all duration-1000"}`}>
                                        <div className={`${hover1 === true ? "block transition-all duration-1000" : ""}`}>
                                            <h1 className={`text-base md:mt-0 mt-10 transition-all duration-1000 text-white mx-12 ${hover1 === true ? "block" : "hidden"}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</h1>

                                            <Link
                                                to={"/tour-search"} className={`font-bold cursor-pointer ${hover1 === true && "opacity-100"} opacity-0 text-red-500 mt-10 hover:scale-105`}>VIEW ALL TOURS</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* 2images 3t and 2t end */}

                        <br />



                        {/* 3 Images st*/}

                        <div className="w-full gap-8 mt-5 md:grid flex flex-col md:grid-cols-3">

                            <div onMouseEnter={e => sethover2(true)} onMouseLeave={e => sethover2(false)} className="h-[400px] rounded-md bg-cover bg-[url('https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">


                                <div className={`${hover2 === true && "bg-black h-full   bg-opacity-60 transition-all duration-500"}`}>

                                    <h1 className='text-lg p-4 text-right'><span className='bg-orange-500  px-3 p-1 rounded-md text-white'>5 tours</span></h1>

                                    <h1 className={`transition-all text-info ${hover2 === true && "relative md:bottom-48"} duration-1000 text-center md:mt-56 mt-10 text-white font-bold text-2xl`}>Asia</h1>
                                    <div className={`mt-2 md:mt-0 transition-all duration-300 text-center ${hover2 === true && "relative md:bottom-44 transition-all duration-1000"}`}>
                                        <div className={`${hover2 === true ? "block transition-all duration-1000" : ""}`}>
                                            <h1 className={`text-base md:mt-0 mt-10 transition-all duration-1000 text-white mx-12 ${hover2 === true ? "block" : "hidden"}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</h1>

                                            <Link to={"/tour-search"} className={`font-bold cursor-pointer ${hover2 === true && "opacity-100"} opacity-0 text-red-500 mt-10 hover:scale-105`}>VIEW ALL TOURS</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>





                            <div onMouseEnter={e => sethover3(true)} onMouseLeave={e => sethover3(false)} className="h-[400px] rounded-md bg-cover bg-[url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYSUyMGJyaWRnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">

                                <div className={`${hover3 === true && "bg-black h-full   bg-opacity-60 transition-all duration-500"}`}>

                                    <h1 className='p-4 text-right'><span className='bg-orange-500  px-3 p-1 rounded-md text-white'>4 tours</span></h1>

                                    <h1 className={`text-2xl transition-all text-warning ${hover3 === true && "relative md:bottom-48"} duration-1000 text-center md:mt-56 mt-10 text-white font-bold text-2xl`}>America</h1>
                                    <div className={`mt-2 md:mt-0 transition-all duration-300 text-center ${hover3 === true && "relative md:bottom-44 transition-all duration-1000"}`}>
                                        <div className={`${hover3 === true ? "block transition-all duration-1000" : ""}`}>
                                            <h1 className={`text-base md:mt-0 mt-10 transition-all duration-1000 text-white mx-12 ${hover3 === true ? "block" : "hidden"}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</h1>

                                            <Link to={"/tour-search"} className={`font-bold cursor-pointer ${hover3 === true && "opacity-100"} opacity-0 text-red-500 mt-10 hover:scale-105`}>VIEW ALL TOURS</Link>
                                        </div>
                                    </div>
                                </div>



                            </div>




                            <div onMouseEnter={e => sethover4(true)} onMouseLeave={e => sethover4(false)} className="h-[400px] rounded-md bg-cover bg-[url('https://images.unsplash.com/photo-1520541868116-c0480187f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYSUyMHdpbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')]">

                                <div className={`${hover4 === true && "bg-black h-full   bg-opacity-60 transition-all duration-500"}`}>

                                    <h1 className='p-4 text-right'><span className='bg-orange-500  px-3 p-1 rounded-md text-white'>4 tours</span></h1>

                                    <h1 className={`text-2xl transition-all text-sky-400     ${hover4 === true && "relative md:bottom-48"} duration-1000 text-center md:mt-56 mt-10 text-white font-bold text-2xl`}>Africa Wild</h1>
                                    <div className={`mt-2 md:mt-0 transition-all duration-300 text-center ${hover4 === true && "relative md:bottom-44 transition-all duration-1000"}`}>
                                        <div className={`${hover4 === true ? "block transition-all duration-1000" : ""}`}>
                                            <h1 className={`text-base md:mt-0 mt-10 transition-all duration-1000 text-white mx-12 ${hover4 === true ? "block" : "hidden"}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separate.</h1>

                                            <Link to={"/tour-search"} className={`font-bold cursor-pointer ${hover4 === true && "opacity-100"} opacity-0 text-red-500 mt-10 hover:scale-105`}>VIEW ALL TOURS</Link>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>






                    </div>


                </div>
                {/* Porpular Destination end */}

                {/*  */}

                <div className="">

                    <div className="text-center px-24 mt-16">
                        <h1 className='text-4xl font-bold'>Popular Tours</h1>
                        <Link to={"/tour-search"} className='text-red-500 font-medium mt-7 text-base flex items-center gap-3 justify-center cursor-pointer'>View All Tours <BsArrowRight className='text-xl font-extrabold' /></Link>
                    </div>

                    {/* 3cards */}
                    <div className="mx-6 flex flex-col lg:flex-row gap-7 mt-20 ">


                        <Link to={"/tour-search"} className="card rounded-xl bg-base-100 shadow-xl">
                            <figure><img className='cursor-pointer hover:scale-x-105 transition-all duration-500 h-[350px] w-full' src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVuaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                                <div className="">

                                    <div className="mx-4 flex items-center gap-2">
                                        <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                        <h1 className='font-bold text-xl'>Venice, Rome and Milan – 9 Days 8 Nights</h1>
                                    </div>

                                    <div className="my-2     ms-4">
                                        <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                            <span className='text-base'>7 Days</span>
                                        </span>

                                        <div className="mt-4 flex justify-between items-center">

                                            <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>(1 Review)</span></span>
                                            <span>
                                                <h1 className='line-through text-slate-700 font-semibold opacity-80 text-lg'>$4,300</h1>
                                            </span>


                                        </div>
                                        <h1 className='text-right text-2xl text-orange-500 font-bold'>$3,500</h1>


                                    </div>

                                </div>


                            </div>
                        </Link>


                        <Link to={"/tour-search"} className="card  rounded-xl card-compact bg-base-100 shadow-xl">
                            <figure><img className=' cursor-pointer hover:scale-x-105 transition-all duration-500 h-[350px] w-full' src="https://media.istockphoto.com/id/1127768734/photo/seine-in-paris.webp?b=1&s=170667a&w=0&k=20&c=4hu9HdkKwh0b9SkTaDraIgIZQiIG_8c1vf4yN8Nuo84=" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                                <div className="">

                                    <div className="mx-4 flex items-center gap-2">
                                        <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                        <h1 className='font-bold text-xl'>Enquiry Form Only – Paris – 6 Days</h1>
                                    </div>

                                    <div className="my-2 ms-4">
                                        <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                            <span className='text-base'>5 Days</span>
                                        </span>

                                        <div className="mt-4 flex justify-between items-center">

                                            <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>(2 Review)</span></span>
                                            <span>
                                                <h1 className='line-through text-slate-700 font-semibold opacity-80 text-lg'>$3700</h1>
                                            </span>


                                        </div>
                                        <h1 className='text-right text-2xl text-orange-500 font-bold'>$2000</h1>


                                    </div>

                                </div>


                            </div>
                        </Link>


                        <Link to="/tour-search" className="card rounded-xl card-compact  bg-base-100 shadow-xl">
                            <figure><img className='cursor-pointer hover:scale-x-105 transition-all duration-500 h-[350px] w-full' src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9zY293fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                                <div className="">

                                    <div className=" flex items-center ">
                                        <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                        <h1 className='font-bold text-xl w-80'>Two Capitals Tour of 7 days and    6 nights From Moscow</h1>
                                    </div>

                                    <div className="my-2 ms-4">
                                        <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                            <span className='text-base'>8 Days</span>
                                        </span>

                                        <div className="mt-4 flex justify-between items-center">

                                            <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>(1 Review)</span></span>
                                            <span>
                                                <h1 className='line-through text-slate-700 font-semibold opacity-80 text-lg'>$ 3880</h1>
                                            </span>


                                        </div>
                                        <h1 className='text-right text-2xl text-orange-500 font-bold'>$3,500</h1>


                                    </div>

                                </div>


                            </div>
                        </Link>

                    </div>





                    {/* Enjou Summer Delas */}
                    <div className="md:m-9 mt-20 m-2 md:mt-28">

                        <div className="flex w-full flex-col md:flex-row  md:items-center">

                            <div className="h-[338px] pt-16 text-center  md:w-[50%] opacity-90  bg-orange-500">

                                <h1 className='text-center opacity-70 text-2xl font-bold text-white'>Enjoy Summer Deals</h1>
                                <h1 className='text-white mt-3 font-bold text-4xl'>Up to 40% Discount!</h1>

                                <button className='btn mt-6  rounded-md bg-black text-white hover:bg-stone-900'>LEARN MORE</button>
                                <h1 className='cursor-pointer text-white text-lg mt-6'><b>TRAVEL</b>TOUR
                                    <br />
                                </h1>
                                <h1 className='text-xs mt-4 text-white'> *Terms Applied</h1>
                            </div>

                            <div className="md:w-[50%]">
                                <img className='w-full' src="data:image/webp;base64,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" alt="" />
                            </div>

                        </div>
                    </div>


                    {/* Our Recommended start  */}

                    <div className="">
                        <div className="text-center mt-24 mx-auto ">
                            <h1 className='text-4xl font-bold'>Our Recommended</h1>
                            <Link to={"/tour-search"} className='text-red-500 font-medium mt-7 text-base flex items-center gap-3 justify-center cursor-pointer'>View All Recommended <BsArrowRight className='text-xl font-extrabold' /></Link>
                        </div>
                        {/* 3cards */}
                        <div className="lg:ps-14 ps-6 flex w-full flex-col lg:flex-row gap-7 mt-20 ">


                            <Link to={"/tour-search"} className="card lg:w-[30%] rounded-xl bg-base-100 shadow-xl">
                                <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[300px] w-full' src="https://media.istockphoto.com/id/1300012823/photo/diamond-head-state-park-hawaii.webp?b=1&s=170667a&w=0&k=20&c=HnXh5uSZPwS8SdGvQpISH7Aq4H4KL8ok4ejcXhebwUA=" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div className="">

                                        <div className="flex  items-center gap-2">
                                            <h1 className='font-bold text-xl'>5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head</h1>
                                        </div>

                                        <div className="my-2 ms-1">
                                            <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                                <span className='text-base'>5 Days</span>
                                            </span>

                                            <div className="mt-4 flex justify-between items-center">

                                                <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>(1 Review)</span></span>
                                                <span>
                                                    <h1 className='text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                                </span>


                                            </div>
                                            <h1 className='text-right text-2xl text-orange-500 font-bold'>$1,500</h1>


                                        </div>

                                    </div>


                                </div>
                            </Link>


                            <Link to={"/tour-search"} className="card lg:w-[30%] rounded-xl card-compact bg-base-100 shadow-xl">
                                <figure><img className=' cursor-pointer hover:scale-110 transition-all duration-500 h-[300px] ' src="https://media.istockphoto.com/id/1295501860/photo/woman-dives-in-tropical-sea-underwater-shot.webp?b=1&s=170667a&w=0&k=20&c=7SOzd78oiCvoQ5PIXiHseJ5haUWxqsI8wEOHrwAW6X0=" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div className="">

                                        <div className="flex items-center  gap-2">
                                            <h1 className='font-bold text-xl'>Molokini and Turtle Arches Snorkeling Trip</h1>
                                        </div>

                                        <div className="my-2">
                                            <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                                <span className='text-base'>4 hours</span>
                                            </span>

                                            <div className="mt-4 flex justify-between items-center">

                                                <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>(1 Review)</span></span>
                                                <span>
                                                    <h1 className='line-through text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                                </span>


                                            </div>
                                            <h1 className='text-right text-2xl text-orange-500 font-bold'>$80</h1>


                                        </div>

                                    </div>


                                </div>
                            </Link>


                            <Link to={"/tour-search"} className="card lg:w-[30%] rounded-xl card-compact  bg-base-100 shadow-xl">
                                <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[300px] md:w-fit w-full' src="https://media.istockphoto.com/id/160193420/photo/blue-mosque-in-istanbul.webp?b=1&s=170667a&w=0&k=20&c=YbYu8au3_fKa8sD8iAohg0p3Oam4dPhGoRS_f_Ur2Mk=" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                                    <div className="">

                                        <div className=" flex items-center ">
                                            <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                            <h1 className='font-bold text-xl w-80'>Glories of Turkey Tour: A Cultural & Historical Journey</h1>
                                        </div>

                                        <div className="my-2 ms-4">
                                            <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                                <span className='text-base'>7 Days 6 Nights</span>
                                            </span>

                                            <div className="mt-4 flex justify-between items-center">

                                                <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>(1 Review)</span></span>
                                                <span>
                                                    <h1 className='line-through text-slate-700 font-semibold opacity-80 text-lg'>$ 4000</h1>
                                                </span>


                                            </div>
                                            <h1 className='text-right text-2xl text-orange-500 font-bold'>$5000</h1>


                                        </div>

                                    </div>


                                </div>
                            </Link>



                        </div>
                    </div>

                    {/* Traveling Highlights start */}


                    <div className="mt-36">
                        <div className="pt-40 text-center h-screen  opacity-100 bg-opacity-40 bg-cover bg-[url('https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60')]">
                            <h1 className='opacity-100 font-bold text-white text-6xl'>Traveling Highlights</h1>
                            <h1 className='text-red-400 mt-14 font-semibold text-4xl opacity-100'>Your New Traveling Idea</h1>

                            <h1 className='text-center  mt-11'><TbPlayerPlayFilled className="text-5xl cursor-pointer text-white mx-auto" /></h1>





                        </div>
                    </div>

                    {/* Traveling Highlights end */}

                </div>


            </div>

            {/* CustCustomer Reviews st */}


            <div className="mt-20">


                <div className="flex gap-8 flex-col md:flex-row items-center px-6">


                    <div className="">
                        <div className="bg-orange-500 rounded-lg py-6 text-white card card-compact  shadow-xl">
                            <div className="card-body mx-5 mb-11">

                                <h1 className='text-3xl'><BiSolidQuoteAltLeft /></h1>
                                <h1 className='mt-2 italic text-lg'>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus
                                    magna.</h1>
                                <div className='mt-4 flex gap-5 items-center'>
                                    <img className='round h-10' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <div className="">
                                        <h1 className='text-black font-medium text-xl'>John Doe</h1>
                                        <h1 className='flex text-yellow-400 text-xl'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> </h1>
                                        <h1 className='text-lg'>Solar Travel</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="bg-orange-500 py-6 text-white card card-compact rounded-lg shadow-xl">
                            <div className="card-body mx-5 mb-11">

                                <h1 className='text-3xl'><BiSolidQuoteAltLeft /></h1>
                                <h1 className='mt-2 italic text-lg'>The organization of the tour and the accommodations were excellent and the meals, superb. Our 2 guides, both archaeologists, were enormously knowledgeable, did a wonderful job.</h1>
                                <div className='mt-4 flex gap-5 items-center'>
                                    <img className='round h-12 w-11' src={Rahul} alt="" />
                                    <div className="">
                                        <h1 className='text-black font-medium text-xl'>Rahul Mehata</h1>
                                        <h1 className='flex text-yellow-400 text-xl'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> </h1>
                                        <h1 className='text-lg'>Solar Travel</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="bg-orange-500 py-6 text-white card card-compact rounded-lg shadow-xl">
                            <div className="card-body mx-5 mb-11">

                                <h1 className='text-3xl'><BiSolidQuoteAltLeft /></h1>
                                <h1 className='mt-2 italic text-lg'>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus
                                    magna.</h1>
                                <div className='mt-4 flex gap-5 items-center'>
                                    <img className='round w-10 h-11 ' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                                    <div className="">
                                        <h1 className='text-black font-medium text-xl'>John Smith</h1>
                                        <h1 className='flex text-yellow-400 text-xl'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> </h1>
                                        <h1 className='text-lg'>Solar Travel</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>



            {/* Browse Tour By Category */}

            <div className="mt-32 py-24 flex lg:flex-row flex-col  gap-20 lg:gap-48 px-10 bg-stone-100">


                <div className="">
                    <h1 className='text-2xl font-bold'>Browse Tour By Category</h1>
                    <div className="flex lg:flex-row flex-col mt-7 gap-8 lg:gap-28 lg:items-center">
                        <div className="flex flex-col gap-4">
                            <h1 className='text-red-500 text-base'>Outdoor Activites</h1>
                            <h1 className='text-red-500 text-base'>Cultural & Thematic Tours</h1>
                            <h1 className='text-red-500 text-base'>Family Friendly Tours</h1>
                            <h1 className='text-red-500 text-base'>Holiday & Seasonal Tours</h1>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-red-500 text-base'>Outdoor Activites</h1>
                            <h1 className='text-red-500 text-base'>Cultural & Thematic Tours</h1>
                            <h1 className='text-red-500 text-base'>Family Friendly Tours</h1>
                            <h1 className='text-red-500 text-base'>Holiday & Seasonal Tours</h1>
                        </div>
                    </div>

                </div>

                <div className="">
                    <h1 className='text-2xl font-bold'>Newsletter</h1>
                    <h1 className='mt-8 text-base'>Subscribe for updates & promotions</h1>
                    <div className="input-group mt-7">
                        <input className=' bg-white px-5 w-full' type="text" placeholder='YOUR EMAIL ADDRESS' />
                        <button className="btn bg-orange-500 text-white">SUBSCIBE</button>

                    </div>

                </div>



            </div>



            {/* Recent Articles */}


            <div className="mt-20">
                <div className="mb-24 text-center px-36">
                    <h1 className='text-4xl font-bold'>Recent Articles</h1>
                    <h1 className='text-red-500 font-medium mt-7 text-base flex items-center gap-3 justify-center'>Read The Blog<BsArrowRight className='text-xl font-extrabold' /></h1>

                </div>


                {/* 3 card */}

                <div className="mx-4 lg:mt-10">

                    <div className="w-full gap-10 mt-5 lg:grid flex flex-col lg:grid-cols-3">

                        <div onMouseEnter={e => sethover2(true)} onMouseLeave={e => sethover2(false)} className="hover:scale-105 transition-all duration-300 h-[400px] rounded-md bg-cover bg-[url('https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D')]">

                            <div className={`text-center h-full  w-full transition-all duration-300   ${hover2 === true ? "bg-opacity-50 bg-red-300" : "bg-opacity-25"}`}>

                                <div className="pt-72 mx-8">
                                    <h1 className='font-bold text-white text-xl'>How to travel with paper map</h1>
                                    <div className='mx-5 mt-3 text-white flex items-center gap-2'>
                                        <h1>June 6, 2023</h1>
                                        <li className='list-item'>John smith</li>
                                    </div>
                                </div>

                            </div>




                        </div>




                        <div onMouseEnter={e => sethover3(true)} onMouseLeave={e => sethover3(false)} className="hover:scale-105 transition-all duration-300 h-[400px] rounded-md bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1675712567395-36627a4a5949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwbW91bnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')]">

                            <div className={`text-center h-full  w-full transition-all duration-300   ${hover3 === true ? "bg-opacity-50 bg-red-300" : "bg-opacity-25 "}`}>

                                <div className="pt-72 mx-8">
                                    <h1 className='font-bold text-white text-xl'>Change your place and get the fresh air</h1>
                                    <div className='mx-5 mt-3 text-white flex items-center gap-2'>
                                        <h1>June 17, 2022</h1>
                                        <li className='list-item'>Rahul Mehata</li>
                                    </div>
                                </div>

                            </div>

                        </div>







                        <div onMouseEnter={e => sethover4(true)} onMouseLeave={e => sethover4(false)} className="hover:scale-105 transition-all duration-300 h-[400px] rounded-md bg-cover bg-[url('https://images.unsplash.com/photo-1448518184296-a22facb4446f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGJhY2slMjBvbiUyMGJvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')]">

                            <div className={`text-center h-full  w-full transition-all duration-300  ${hover4 === true ? "bg-opacity-50 bg-red-300 " : "bg-opacity-25"}`}>

                                <div className={`pt-72 mx-8 opacity-100 ${hover4 === true && "opacity-100"}`}>
                                    <h1 className='font-bold text-white text-xl'>Pityful a rethoric question ran</h1>
                                    <div className='mx-5 mt-3 text-white flex items-center gap-2'>
                                        <h1>June 6, 2023</h1>
                                        <li className='list-item'>Rachel ..</li>
                                    </div>
                                </div>

                            </div>




                        </div>







                    </div>

                </div>

            </div>



            {/* We are featured in  */}

            <div className="mt-32">
                <div className="text-center">
                    <h1 className='font-bold text-3xl'>We are featured in</h1>
                    <h1 className='text-stone-400 mt-8 font-sans font-medium text-lg'>See what others are saying about us</h1>

                    <div className="flex items-center mt-16 gap-16 flex-col lg:flex-row justify-evenly">

                        <img className='h-10 w-32' src="data:image/png;base64,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" alt="" />
                        <img className='h-20 w-32' src="data:image/png;base64,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" alt="" />
                        <img className='h-20 w-32' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAbFBMVEX///9JSUlEREQ5OTlbW1v8/Px4eHjQ0NA8PDxBQUGkpKScnJwyMjI2NjYvLy/4+Pjl5eXr6+sqKipQUFDY2Nhvb2+CgoK4uLiOjo7Kysrx8fG+vr5VVVXe3t6xsbGqqqpnZ2cfHx8DAwMSEhJCmWjeAAAGxElEQVR4nO1aa5OrKBBVfAQU0eAj8ZWYuf//P16lQQWdzNZOdKu2OF/GQZRj05xumjiOhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcU+miwLTh7y3vka8mhq7X0DoehcrlrKK7yguGPGGc2jXr6xuLwdwM/vH6Bdfr0oQQqYf4mXFvyVzI0k4X860dn980oINL1cQbu5e4yX9wpxhmLRJzBoVYy9XvMI7EVZ+AHaTtDfSuICcFir2c5i1Uj8qEjnzo9hbCedtG2GMbmLR/oS47wYL2IWb8bo1Qh5+wnKikyFxEtRvm59wlCoy7TOTYlcXzZdO4QVyeDBifvMYoy3tJ0+Bwvs3PoF+gSMrb91EB9DTFeMCS/kZUeQv9yoiYspNt8ikJbiXbj+KG0HA22d4VN8DKkMlYgxkVc35tL1rN/4zscLBKGg7V22t36Du+C9Nt2IlIGTNDqDikpe1851u+v6XozPpd1SYW6ujwVewjRmztWncqrbxEVlur6XduhU2j2sSVZorTAHyU1rLGgnFXqUB2R4UEFPpd2AYfFTG0uuyUrreqODtPDoySZtJyRn0nbuQu2QxrDhILadRq1M5MK9TrRL3fGnaTuT9kOuybUf10wGnH7dkyjxuEy3DVGfzH0m7QwoemvnvhPweLx27szj0kfqaRlTU4l7diZtBwJO8lg1DR6sSY3HDbvyStAm5YZgcibtSjg3GZaWrEMZuM6wUrk7VTGpEK5PTSYtPZP2DcxNl5Y6KRuIyXRZd2k5x8XmJb5JV+6xx6lO0kPiRBfnjsZULhLmZosDZ8ide0i/MnOWS+9scBjtrXKXSeu02MhVLnyYTV9BJpP8g2T0MNrSuRflThnJnCw3cpWYLtJee6CPRhjdw3G0n4ZyF3zKvn0xXD6rs08XrZETNM7Gj/Y+jrZU7kS5bswmu4IEEsUrxXwVX1oVj2j0n9E2lbvkE1eIlFjRumC8fsRXGzfvbujJebRDTbmvvjfZtREZLSllWhIlWtbSuwrJoKe359HWlftChGSkUmBAPoKKPfRnqOJNusL5HgfSLvDauR8MVE9sWFy5e2x8Ygwce4o3eicoB9K+gmpIP66kk9/wqrFPfNMX4mR2FPx93eZA2k4ldwXCjwmBYAelAjSIf247pZnF3q5Xfbcwj6S9Vu6Mq0QP5gD2wRXbUbqHh2Z7m7uGM2j3fHHuB1d2ldFTDJjznXzDacnCe9jnfSRtB2h7U1qySAZs6kWukhG2W1nNcvID70NpQ6Vu8uNmYMquVzZ7fOuZmwKJJpyFEO8WJg+lDWUo1wucwvWV1aRyu+kU75/fPBmAToqn9/TkUNpSuceXt2ypJEBaMuYiaZh8X8Or54WJd7gdSntR7jtd7HoTrjPK+HW7T1+hUAkK8rcyeChtJ1TK3a0GKAQZEo6p7PDu4cyXjsK24fJY2pFU7p6TlWT40BhE/H15uimxNPdGb46lDZtxF92TYdUKyu32Jf+hPH2VfoI2/Y6lLZXbRd46GoJyk0fONaeN3E2umuWwODazcjBttc3SSq8ZfExnTH7EH44J2FWQUHWc/x5L+ynzIq3a3viyqKYbMcLe9gWiBIo6mJYiTJKwP4H2BWijcO0OAZRjXU/f6Y60t+YuQIvE47U3LlEsrg+mffVB7fRED3JuN9fzqFF2uu1OTNSx8ES1kDE3Pp62VG7jRAuUWysFAm1vq4hiaydoD1JWwhNoQ27hGadMOUQhvesk8nwTNqfMS8TJXgYfjfa7/eZvIGrt+rGqI2feLJpNtBfNUGiw3OhLz3KTaKGd7KXrHwHf093HNPPccGQRUqmZEza5fD6SZ53D1CqPU+lhP4SYxG5zRDApN8qNMYGXZxiwceXxA9zmlfA3qDgj1zkK0SSBpsdOyr3Zl8sExlCTJpElw+nIHqmfBlxFHPN+qrn9e9Te9vjLCca0ZCPSygv07cyY1sDByFRjpmoqsk50Pcy1x/Rz++MAOEgzVWCijRLPxdrZ5ChFsJ9Lyfj9qlWEsTd1lF8jKBHe5ssXhHxzCkbaBLURR3iljGk3/xvipS4ukgb2TTXiI4hxso19aU42W9sIk+ncJisTb5hnP8bz913RLD7BpERmHe6zuDC00zpslG5cvCIYOuk98XI5QeOn4NmZbpRAbpOOS4P8lKz/EsGfaqf1+bWJh/FLma8oE07itn7mjJbrsr3LyLNtI4IRC99sQz+CHdcemX1t9rVFOy/FtB6Jj6B+q3XLqqmZeXRo35ftP4D9SPZTfAuKur1s11xaP6Nn/bZkb2FhYWFhYWFhYWFhYWFhYWFhYWFhYfE/wV9SIVS/wXanogAAAABJRU5ErkJggg==" alt="" />
                        <img className='h-20 w-32' src="data:image/png;base64,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" alt="" />
                        <img className='h-20 w-48' src="data:image/png;base64,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" alt="" />
                    </div>

                </div>
            </div>

        </div >

        <Footer />



    </>
}

export default Home