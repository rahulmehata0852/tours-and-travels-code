import React, { useEffect, useState } from 'react'
import { AiFillThunderbolt, AiOutlineBars, AiOutlineSearch, AiTwotoneStar } from 'react-icons/ai'
import { PiDotsNine } from 'react-icons/pi'
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled, TbSquareRoundedNumber5Filled } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import { FaRegHandPointDown } from 'react-icons/fa'
import { GetSearchTours, SearchFilter, TourList1stgetact, TourList2ndgetact, TourList3rdgetact, TourList4thgetact } from '../redux/actions/Action'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const TourSearch = () => {



    const [filter, setfilter, loading] = useState()

    const [number, setnumber] = useState(true)
    const [number1, setnumber1] = useState(false)
    const [number2, setnumber2] = useState(false)
    const [number3, setnumber3] = useState(false)


    const { tour1, filterSearch } = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TourList1stgetact())
        dispatch(TourList2ndgetact())
        dispatch(TourList3rdgetact())
        dispatch(TourList4thgetact())
    }, [])

    const navi = useNavigate()
    const handleClick = arg => {
        dispatch(GetSearchTours({ Place: arg.Place }))

        console.log("clicked", arg.Place);
        navi("/book-tours")
    }



    return loading === true ? <>
        <span className="loading loading-spinner loading-md"></span>
    </>
        : <>

            <div className="">

                {/* bg image and heading */}
                <div className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                    <div className="h-full w-full   bg-black bg-opacity-50">
                        <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>Search Tours</h1>

                    </div>

                </div>
                {/* Main content start */}

                <div className="mt-16"></div>


                <div className=" lg:flex w-full ">


                    <div className="lg:w-[30%] lg:h-[100%] m-6 p-4 py-14 border-2 border-stone-500 rounded-lg border-solid">
                        <div className="mx-3">
                            <div className="flex items-center gap-2">
                                <AiOutlineSearch className='text-xl' /> <span className='text-orange-500 font-bold text-xl'>Tour Search</span>
                            </div>
                            <h1 className='mt-8 font-bold'>KeyWords</h1>
                            <div className="mt-8 input-group">
                                <input className='input rounded-md w-full  border-solid border border-black' type="text" name="" id="" />
                                <span className='text-xl bg-sky-400 border-solid border border-black '> <AiOutlineSearch /></span>
                            </div>

                            <div className="mt-12">
                                <h1 className='font-bold'>Tag</h1>
                                {/* checkbox */}
                                <div className="">

                                    <div className="form-control">
                                        <label className="label justify-normal gap-3 cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="label-text text-lg">Our Recommended</span>
                                        </label>
                                        <label className="label justify-normal gap-3 cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="label-text text-lg">Popular Deals</span>
                                        </label>
                                        <label className="label justify-normal gap-3 cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="label-text text-lg">Top One Day Tour</span>
                                        </label>
                                        <label className="label justify-normal gap-3 cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="label-text text-lg">Top Vacation Tours</span>
                                        </label>
                                    </div>

                                </div>
                                {/* selelct */}
                                <h1 className='mt-10 font-bold text-lg'>Duration</h1>
                                <select onChange={e => setfilter({ ...filter, [e.target.name]: e.target.value })} value={filter && filter.time} name='time' className="mt-6 select sele select-bordered w-full ">
                                    <option disabled selected>Any</option>
                                    <option value={"5 hours"}>5 hours</option>
                                    <option value={"12 hours"}>12 hours</option>
                                    <option value={"24 hours"}>24 hours</option>
                                    <option value={"3 days"}>3 days</option>
                                    <option value={"More Than 3 days"}>More Than 3 days</option>
                                </select>
                                {/* Date */}

                                <h1 className='mt-10 font-bold text-lg'>Date</h1>
                                <input className='input w-full border-solid mt-6 border-black' type="date" name="" id="" />
                                {/* Month */}

                                <h1 className='mt-10 font-bold text-lg'>Months</h1>
                                <select className="mt-6 select sele select-bordered w-full ">
                                    <option disabled selected>Any</option>
                                    <option>October 2023</option>
                                    <option>November 2023</option>
                                    <option>December 2023</option>
                                    <option>January 2024</option>
                                    <option>February 2024</option>
                                    <option>March 2024</option>
                                    <option>April 2024</option>
                                    <option>May 2024</option>
                                    <option>June 2024</option>
                                    <option>July 2024</option>
                                    <option>August 2024</option>
                                    <option>Septemper 2024</option>
                                </select>


                                {/* Min price and Max price */}

                                <div className="mt-7 flex gap-4">
                                    <div className=" ">
                                        <h1 className='font-bold text-lg'>Min Price</h1>
                                        <input className='input w-[100%] mt-2 border-solid border-black' type="number" name="" id="" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-lg'>Min Price</h1>
                                        <input className='input mt-2 w-full border-solid border-black' type="number" name="" id="" />
                                    </div>

                                </div>
                                {/* rating */}
                                <div className="mt-9">

                                    <h1 className='font-bold text-lg'>Rating</h1>

                                    {/* xs */}

                                    {/* md */}
                                    <div className="rating rating-md mt-3 gap-1">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <hr className='mt-3' />
                                    <hr />
                                    <hr />
                                    <button onClick={e => dispatch(SearchFilter(filter))} className="btn bg-orange-500 hover:bg-orange-400 w-full text-white fontbold mt-5">Search </button>

                                </div>

                            </div>



                        </div>

                    </div>






                    {/* 70 percente of main content */}



                    {
                        filterSearch ? filterSearch && <>

                            <div className="lg:w-[70%] m-7">


                                <div className="">
                                    <h1 className='font-bold text-2xl'>{filterSearch.length} Results Found</h1>
                                    <div className="border mt-9 p-2 rounded-md ps-8 border-black flex items-center justify-between gap-3">
                                        <div className="flex  items-center">

                                            <h1 className='font-bold text-lg'>Sort by</h1>

                                            <select className="border-none select select-bordered">
                                                <option disabled selected>Release Date</option>
                                                <option>Tour Date</option>
                                                <option>Title</option>
                                                <option>Price</option>
                                                <option>Popularity</option>
                                                <option>Rating</option>
                                                <option>Duration</option>
                                            </select>
                                            <select className="select border-none select-bordered ">
                                                <option>Desending</option>
                                                <option>Ascending</option>
                                            </select>

                                        </div>
                                        <div className="flex gap-1">
                                            <h1 className='font-bold text-3xl cursor-pointer hover:text-red-500'><AiOutlineBars /></h1>
                                            <h1 className='font-bold text-3xl cursor-pointer text-red-500'><PiDotsNine /></h1>
                                        </div>


                                    </div>



                                </div>



                                <div className="mt-10 text-xl font-medium hover:scale-95 transition-all duration-300">

                                    <h1 className=' flex gap-4'>5 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

                                </div>


                                {/* Dynamically print */}


                                <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-11 mx-1">

                                    {
                                        filterSearch.map(item => <div
                                            onClick={e => handleClick(item)}
                                            className=''>

                                            <div className="card rounded-xl bg-base-100 shadow-xl">
                                                <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[350px] w-full' src={item.imageAddress} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                                                    <div className="">

                                                        <div className="mx-4 flex items-center gap-2">
                                                            <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                                            <h1 className='font-bold text-xl'>{item.Place}</h1>
                                                        </div>

                                                        <div className="my-2     ms-4">
                                                            <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                                                <span className='text-base'>{item.time}</span>
                                                            </span>

                                                            <div className="mt-4 flex justify-between items-center">

                                                                <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>({item.review} Review)</span></span>
                                                                <span>
                                                                    <h1 className=' text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                                                </span>


                                                            </div>
                                                            <h1 className='text-right text-2xl text-orange-500 font-bold'>${item.price}</h1>


                                                        </div>

                                                    </div>


                                                </div>
                                            </div>


                                        </div>)
                                    }




                                </div>




                            </div>
                        </>




                            : <>

                                <div className="lg:w-[70%] m-7">


                                    <div className="">
                                        <h1 className='font-bold text-2xl'>22 Results Found</h1>
                                        <div className="border mt-9 p-2 rounded-md ps-8 border-black flex items-center justify-between gap-3">
                                            <div className="flex  items-center">

                                                <h1 className='font-bold text-lg'>Sort by</h1>

                                                <select className="border-none select select-bordered">
                                                    <option disabled selected>Release Date</option>
                                                    <option>Tour Date</option>
                                                    <option>Title</option>
                                                    <option>Price</option>
                                                    <option>Popularity</option>
                                                    <option>Rating</option>
                                                    <option>Duration</option>
                                                </select>
                                                <select className="select border-none select-bordered ">
                                                    <option>Desending</option>
                                                    <option>Ascending</option>
                                                </select>

                                            </div>
                                            <div className="flex gap-1">
                                                <h1 className='font-bold text-3xl cursor-pointer hover:text-red-500'><AiOutlineBars /></h1>
                                                <h1 className='font-bold text-3xl cursor-pointer text-red-500'><PiDotsNine /></h1>
                                            </div>


                                        </div>



                                    </div>



                                    {
                                        number === true ? <Tour1 />
                                            : number1 === true ? <Tour2 />
                                                : number2 === true ? <><Tour3 /></>
                                                    : number3 === true ? <Tour4 />
                                                        : <></>
                                    }



                                    <div className="text-right flex justify-end me-5 my-14">

                                        <TbSquareRoundedNumber1Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(true), setnumber1(false), setnumber2(false), setnumber3(false) }} className={`cursor-pointer text-orange-500 text-5xl ${number ? "text-sky-500" : "text-orange-500"}`} />
                                        <TbSquareRoundedNumber2Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(false), setnumber1(true), setnumber2(false), setnumber3(false) }} className={`cursor-pointer text-orange-500 text-5xl ${number1 ? "text-sky-500" : "text-orange-500"}`} />
                                        <TbSquareRoundedNumber3Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(false), setnumber1(false), setnumber2(true), setnumber3(false) }} className={`cursor-pointer text-orange-500 text-5xl ${number2 ? "text-sky-500" : "text-orange-500"}`} />
                                        <TbSquareRoundedNumber4Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(false), setnumber1(false), setnumber2(false), setnumber3(true) }} className={`cursor-pointer text-orange-500 text-5xl ${number3 ? "text-sky-500" : "text-orange-500"}`} />



                                    </div>



                                </div>

                            </>
                    }






                </div>
            </div>
            <Footer />
        </>
}













const Tour1 = () => {

    const { tour1 } = useSelector(state => state.users)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TourList1stgetact())
    }, [])

    const navi = useNavigate()
    const handleClick = arg => {
        dispatch(GetSearchTours({ Place: arg.Place }))
        navi("/book-tours")
    }


    return tour1 && <>

        <div className="mt-10 text-xl font-medium hover:scale-95 transition-all duration-300">

            <h1 className=' flex gap-4'>5 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-11 mx-1">

            {
                tour1.map(item => <div
                    onClick={e => handleClick(item)}
                    className=''>

                    <div className="card rounded-xl bg-base-100 shadow-xl">
                        <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[350px] w-full' src={item.imageAddress} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                            <div className="">

                                <div className="mx-4 flex items-center gap-2">
                                    <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                    <h1 className='font-bold text-xl'>{item.Place}</h1>
                                </div>

                                <div className="my-2     ms-4">
                                    <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                        <span className='text-base'>{item.time}</span>
                                    </span>

                                    <div className="mt-4 flex justify-between items-center">

                                        <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>({item.review} Review)</span></span>
                                        <span>
                                            <h1 className=' text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                        </span>


                                    </div>
                                    <h1 className='text-right text-2xl text-orange-500 font-bold'>${item.price}</h1>


                                </div>

                            </div>


                        </div>
                    </div>


                </div>)
            }




        </div>


    </>
}





const Tour2 = () => {

    const { tour2 } = useSelector(state => state.users)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TourList2ndgetact())
    }, [])

    const navi = useNavigate()
    const handleClick = arg => {
        dispatch(GetSearchTours({ Place: arg.Place }))
        navi("/book-tours")
    }

    return <>

        <div className="mt-8 text-xl font-medium hover:scale-95 transition-all duration-300">

            <h1 className=' flex gap-4'>12 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-7">

            {
                tour2.map(item => <div className='' onClick={e => handleClick(item)} >

                    <div className="card rounded-xl bg-base-100 shadow-xl">
                        <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[350px] w-full' src={item.imageAddress} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                            <div className="">

                                <div className="mx-4 flex items-center gap-2">
                                    <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                    <h1 className='font-bold text-xl'>{item.Place}</h1>
                                </div>

                                <div className="my-2     ms-4">
                                    <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                        <span className='text-base'>{item.time}</span>
                                    </span>

                                    <div className="mt-4 flex justify-between items-center">

                                        <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>({item.review} Review)</span></span>
                                        <span>
                                            <h1 className=' text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                        </span>


                                    </div>
                                    <h1 className='text-right text-2xl text-orange-500 font-bold'>${item.price}</h1>


                                </div>

                            </div>


                        </div>
                    </div>


                </div>)
            }




        </div>
    </>
}





const Tour3 = () => {

    const { tour3 } = useSelector(state => state.users)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TourList3rdgetact())
    }, [])

    const navi = useNavigate()
    const handleClick = arg => {
        dispatch(GetSearchTours({ Place: arg.Place }))
        navi("/book-tours")
    }

    return <>

        <div className="mt-9 text-xl font-medium hover:scale-95 transition-all duration-300">

            <h1 className=' flex gap-4'>24 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-7">

            {
                tour3.map(item => <div onClick={e => handleClick(item)} className=''>

                    <div className="card rounded-xl bg-base-100 shadow-xl">
                        <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[350px] w-full' src={item.imageAddress} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                            <div className="">

                                <div className="mx-4 flex items-center gap-2">
                                    <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                    <h1 className='font-bold text-xl'>{item.Place}</h1>
                                </div>

                                <div className="my-2     ms-4">
                                    <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                        <span className='text-base'>{item.time}</span>
                                    </span>

                                    <div className="mt-4 flex justify-between items-center">

                                        <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>({item.review} Review)</span></span>
                                        <span>
                                            <h1 className=' text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                        </span>


                                    </div>
                                    <h1 className='text-right text-2xl text-orange-500 font-bold'>${item.price}</h1>


                                </div>

                            </div>


                        </div>
                    </div>


                </div>)
            }




        </div>
    </>
}





const Tour4 = () => {

    const { tour4 } = useSelector(state => state.users)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TourList4thgetact())
    }, [])

    const navi = useNavigate()
    const handleClick = arg => {
        dispatch(GetSearchTours({ Place: arg.Place }))
        navi("/book-tours")
    }

    return <>

        <div className=" text-xl font-medium hover:scale-95 transition-all duration-300">

            <h1 className='mt-7 flex gap-4'>3 days and more than 3 days Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-7">

            {
                tour4.map(item => <div onClick={e => handleClick(item)} className=''>

                    <div className="card rounded-xl bg-base-100 shadow-xl">
                        <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[350px] w-full' src={item.imageAddress} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                            <div className="">

                                <div className="mx-4 flex items-center gap-2">
                                    <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                    <h1 className='font-bold text-xl'>{item.Place}</h1>
                                </div>

                                <div className="my-2     ms-4">
                                    <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                        <span className='text-base'>{item.time}</span>
                                    </span>

                                    <div className="mt-4 flex justify-between items-center">

                                        <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>({item.review} Review)</span></span>
                                        <span>
                                            <h1 className=' text-slate-700 font-semibold opacity-80 text-lg'>From</h1>
                                        </span>


                                    </div>
                                    <h1 className='text-right text-2xl text-orange-500 font-bold'>${item.price}</h1>


                                </div>

                            </div>


                        </div>
                    </div>


                </div>)
            }




        </div>
    </>
}








export default TourSearch