import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TourList1stgetact, TourList2ndgetact, TourList3rdgetact, TourList4thgetact } from '../redux/actions/Action'
import { AiFillThunderbolt, AiTwotoneStar } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import { FaRegHandPointDown } from 'react-icons/fa'
import Footer from './Footer'
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const ToursList = () => {


    const [number, setnumber] = useState(true)
    const [number1, setnumber1] = useState(false)
    const [number2, setnumber2] = useState(false)
    const [number3, setnumber3] = useState(false)


    const { tour1 } = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TourList1stgetact())
        dispatch(TourList2ndgetact())
        dispatch(TourList3rdgetact())
        dispatch(TourList4thgetact())
    }, [])




    return tour1 && <>

        <div className="">


            <div id='topp' className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                <div className="h-full w-full   bg-black bg-opacity-50">
                    <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>Tour Grid 2 Columns</h1>

                </div>

            </div>




            <div className='px-20'>
                {
                    number === true ? <Tour1 />
                        : number1 === true ? <Tour2 />
                            : number2 === true ? <><Tour3 /></>
                                : number3 === true ? <Tour4 />
                                    : <></>
                }

            </div>



        </div>
        <div className="text-right flex justify-end me-5 my-14">

            <TbSquareRoundedNumber1Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(true), setnumber1(false), setnumber2(false), setnumber3(false) }} className={`cursor-pointer text-orange-500 text-5xl ${number ? "text-sky-500" : "text-orange-500"}`} />
            <TbSquareRoundedNumber2Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(false), setnumber1(true), setnumber2(false), setnumber3(false) }} className={`cursor-pointer text-orange-500 text-5xl ${number1 ? "text-sky-500" : "text-orange-500"}`} />
            <TbSquareRoundedNumber3Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(false), setnumber1(false), setnumber2(true), setnumber3(false) }} className={`cursor-pointer text-orange-500 text-5xl ${number2 ? "text-sky-500" : "text-orange-500"}`} />
            <TbSquareRoundedNumber4Filled onClick={e => { window.scrollTo({ top, behavior: "smooth" }), setnumber(false), setnumber1(false), setnumber2(false), setnumber3(true) }} className={`cursor-pointer text-orange-500 text-5xl ${number3 ? "text-sky-500" : "text-orange-500"}`} />



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

    return <>

        <div className="m-14 text-xl font-medium hover:scale-95 transition-all duration-300">
            <h1>The Travel Agent is responsible for booking flights, hotels, and tours for their clients. They also handle details like insurance coverage or handling conflicts ...</h1>

            <h1 className='m-10 flex gap-4'>5 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-11">

            {
                tour1.map(item => <Link to={"/"} className=''>

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


                </Link>)
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

    return <>

        <div className="m-14 text-xl font-medium hover:scale-95 transition-all duration-300">
            <h1>The Travel Agent is responsible for booking flights, hotels, and tours for their clients. They also handle details like insurance coverage or handling conflicts ...</h1>

            <h1 className='m-10 flex gap-4'>12 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-11">

            {
                tour2.map(item => <Link to={"/"} className=''>

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


                </Link>)
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

    return <>

        <div className="m-14 text-xl font-medium hover:scale-95 transition-all duration-300">
            <h1>The Travel Agent is responsible for booking flights, hotels, and tours for their clients. They also handle details like insurance coverage or handling conflicts ...</h1>

            <h1 className='m-10 flex gap-4'>24 hours Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-11">

            {
                tour3.map(item => <Link to={"/"} className=''>

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


                </Link>)
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

    return <>

        <div className="m-14 text-xl font-medium hover:scale-95 transition-all duration-300">
            <h1>The Travel Agent is responsible for booking flights, hotels, and tours for their clients. They also handle details like insurance coverage or handling conflicts ...</h1>

            <h1 className='m-10 flex gap-4'>3 days and more than 3 days Tours List <FaRegHandPointDown className='text-orange-500 text-3xl' /></h1>

        </div>


        {/* Dynamically print */}


        <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-16 mx-11">

            {
                tour4.map(item => <Link to={"/"} className=''>

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


                </Link>)
            }




        </div>
    </>
}




export default ToursList