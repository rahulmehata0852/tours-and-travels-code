import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSearchTours, GetWishList } from '../redux/actions/Action'
import { AiFillThunderbolt, AiTwotoneStar } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Whishlist = () => {

    const { wish, auth } = useSelector(state => state.users)

    const [selectedTour, setselectedTour] = useState({})


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetWishList(auth && auth.id))
    }, [])


    return wish ?

        <>
            <div className="">


                <div className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                    <div className="h-full w-full   bg-black bg-opacity-50">
                        <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>WhishList</h1>

                    </div>

                </div>


                <div className="grid mb-20 lg:grid-cols-2 gap-14 md:grid-cols-1 grid-cols-1 mt-11 mx-16">
                    {
                        wish.map(item => <>
                            <div className=''>

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
                                                <Link to={"/book-tours"} onClick={e => dispatch(GetSearchTours({ Place: item.Place }))} className='btn btn-outline btn-success'>Book Tour</Link>

                                            </div>

                                        </div>


                                    </div>
                                </div>


                            </div>

                        </>)
                    }


                </div>



            </div>


        </>

        : <>


            <h1 className='text-center text-3xl font-bold mt-28'>No WishListed</h1>

        </>


}

export default Whishlist