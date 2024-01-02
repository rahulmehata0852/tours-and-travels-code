import React, { useEffect, useState } from 'react'
import { AiFillThunderbolt, AiOutlineBars, AiOutlineSearch, AiTwotoneStar } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import { PiDotsNine } from 'react-icons/pi'
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AddToWishList, BookTour } from '../redux/actions/Action'
import { toast } from 'react-toastify'
import useDymanicForm from '../hooks/useDynamicForm'
import { invalidate } from '../redux/Slices/Slices'

const BookTours = () => {



    const { SearchTours, auth, bookTour, whishListed } = useSelector(state => state.users)

    const dispatch = useDispatch()

    const [selectedTour, setselectedTour] = useState({})
    const navi = useNavigate()
    useEffect(() => {
        if (bookTour) {
            toast.success("Tour Booked Successfully")
            navi("/success")
            dispatch(invalidate())
        }

    }, [bookTour])


    useEffect(() => {
        if (whishListed) {
            toast.success("Tour Add To WhishList")

            dispatch(invalidate())
        }

    }, [whishListed])

    const [qty, setqty] = useState(1 || "Enter Total passenger")


    const handleSubmit = e => {

    }


    const config = [
        { fieldName: "Fname", type: "text" },
        { fieldName: "Lname", type: "text" },
        { fieldName: "Date of tour", type: "date" },
        { fieldName: "mobile", type: "number" },
        { fieldName: "age", type: "number" },
        { fieldName: "address", type: "text" },
        { fieldName: "Gender", type: "radio", options: ["Male", "Female"] },
    ]


    const [ui, state, pre] = useDymanicForm(config)


    return <>

        <div className="">


            {/* Bg image with heading */}

            <div className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                <div className="h-full w-full   bg-black bg-opacity-50">
                    <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>Book Tours</h1>

                </div>

            </div>



            {/* Main */}


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
                            <select className="mt-6 select sele select-bordered w-full ">
                                <option disabled selected>Any</option>
                                <option>1 Day Tour</option>
                                <option>2-4 Day Tour</option>
                                <option>5-7 Day Tour</option>
                                <option>7+ Day Tour</option>
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
                                <button className="btn bg-orange-500 hover:bg-orange-400 w-full text-white fontbold mt-5">Search </button>

                            </div>

                        </div>



                    </div>

                </div>





                <div className="lg:w-[70%] m-7">


                    <div className="">
                        <h1 className='font-bold text-2xl'>{SearchTours && SearchTours.length} Results Found</h1>
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



                    <div className="mt-10 mx-2">

                        <div className="">
                            <div className=''>


                                <div className="grid lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-11 mx-1">

                                    {
                                        SearchTours && SearchTours.map((item, i) => <div className=''>

                                            <div className="card rounded-xl pb-8 bg-base-100 shadow-xl">
                                                <figure><img className='cursor-pointer hover:scale-110 transition-all duration-500 h-[350px] w-full' src={item.imageAddress} alt="Shoes" /></figure>
                                                <div className="card-body p-1">
                                                    <h2 className="relative bottom-6"><span className='bg-orange-500 px-3 py-2 rounded-md text-white font-semibold'>Best Seller</span></h2>
                                                    <div className="">

                                                        <div className="mx-2 flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <span><AiFillThunderbolt className="text-3xl text-orange-500" /></span>
                                                                <h1 className='font-bold text-xl'>{item.Place}</h1>
                                                            </div>
                                                            <span className='flex items-center gap-1 text-orange-500'><MdOutlineWatchLater className='text-lg' />
                                                                <span className='text-base'>{item.time}</span>
                                                            </span>
                                                        </div>

                                                        <div className="my-2  mx-5   ms-4">

                                                            <div className="mt-4  flex justify-between items-center">

                                                                <span className='text-orange-500 flex items-center'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> <span className='ms-1'>({item.review} Review)</span></span>
                                                                <span>
                                                                    <h1 className=' text-slate-700 font-bold   opacity-80 text-lg'>Price</h1>
                                                                </span>


                                                            </div>
                                                            <h1 className='text-right text-2xl text-orange-500 font-bold'>₹ {item.price}</h1>


                                                        </div>
                                                        <div className="text-right flex gap-2 justify-end">
                                                            <button onClick={e => dispatch(AddToWishList({ ...item, userid: auth.id }))} className="btn btn-outline btn-warning">Add To Wishlist</button>
                                                            <button onClick={() => {
                                                                window.my_modal_11.showModal(),

                                                                    setselectedTour(item)
                                                            }} className="btn btn-outline btn-success">Book Tour</button>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


        {/* onClick={e => dispatch(BookTour({ ...item, userId: auth.id }))} */}
        <dialog id="my_modal_11" className="modal  bg-gradient-to-t from-sky-500 to-orange-500">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl h-screen">
                <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold  mx-auto   text-center text-orange-500 text-3xl">Hello!</h3>

                <div class="w-full">
                    <div class="pt-8">
                        <div className="flex items-center justify-center flex-col">
                            <p class="font-bold text-3xl">Order Summary</p>
                            <p className='text-lg mt-4 font-medium text-sky-400'>introduce the place where you traveled and the person you traveled with. Tone of Voice. ...</p>
                        </div>

                        <div className="flex my-9 gap-6">
                            <div className="">

                                {ui}
                            </div>
                            <div className="w-full">

                                <div className="border-2 shadow-sm my-1 border-white input-group text-center mx-auto items-baseline ">
                                    <span className='bg-sky-300 font-bold  py-3 w-full text-base'>Number of person</span>
                                    <input placeholder='Enter number of person' value={qty} onChange={e => setqty(e.target.value)} className='input border font-medium bg-orange-400  text-white border-black' type="number" />
                                </div>


                                <img className='h-64 w-full' src="https://plus.unsplash.com/premium_photo-1661764174171-c29f85bd8a37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />



                            </div>

                        </div>

                        <p class="text-gray-400">Check your Tour date. And select a suitable tour time.</p>

                        <div className="">

                            <div className="flex mt-7 justify-between mx-1">
                                <h1 className='text-xl font-semibold'>Tour Price</h1>
                                <h1>{selectedTour && +selectedTour.price * qty}</h1>
                            </div>
                            <div className="flex mt-7 justify-between mx-1">
                                <h1 className='text-xl font-semibold'>Convenience Fees</h1>
                                <h1>200</h1>
                            </div>
                            <div className="flex mt-7 justify-between mx-1">
                                <h1 className='text-xl font-semibold'>Total</h1>
                                <h1>{selectedTour && +selectedTour.price * qty + 200}</h1>

                            </div>
                        </div>


                        <p class="mt-8 text-lg font-medium">Payments Methods</p>
                        <form class="mt-5 grid gap-6">
                            <div class="relative">
                                <input class="peer hidden" id="radio_1" type="radio" name="radio" />
                                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                                    <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                    <div class="ml-5">
                                        <span class="mt-2 font-semibold">Online</span>
                                        <p class="text-slate-500 text-sm leading-6"></p>
                                    </div>
                                </label>
                            </div>
                            <div class="relative">
                                <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                                    <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                                    <div class="ml-5">
                                        <span class="mt-2 font-semibold">Pay On Tour</span>
                                        <p class="text-slate-500 text-sm leading-6">Tour Date Will be show in your bill</p>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className='  bg-gray-50 px-4  lg:mt-0'>
                        <div className=" mt-10">

                            <button onClick={e => dispatch(BookTour({ ...selectedTour, ...state, nop: qty, userid: auth.id }))} className="btn btn-primary w-full ">Place Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </dialog>




    </>
}

export default BookTours