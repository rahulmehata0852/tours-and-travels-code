import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTicketDetails } from '../redux/actions/Action'
import Footer from './Footer'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const MyBookings = () => {



    const { auth, ticket, error } = useSelector(state => state.users)

    const dispatch = useDispatch()




    useEffect(() => {

        dispatch(GetTicketDetails(auth.id))

    }, [])

    const navigate = useNavigate()
    useEffect(() => {
        if (error) {
            navigate("/")
            toast.error(error)
        }
    }, [error])


    return ticket ?
        <>
            <div className=" bg-orange-500">

                <div className="lg:w-[50%] text-center mx-auto py-12">



                    {
                        ticket && ticket.map(item => <>

                            <div className="border-2 my-3 rounded-lg  bg-gradient-to-br from-slate-50 to-sky-500 text-left p-5 border-black ">

                                <div className="flex justify-between my-2">
                                    <h1 className='font-semibold'>Name: {item.Fname} {item.Lname}</h1>
                                    <h1 className='font-semibold'>Total Passenger : {item.nop}</h1>
                                </div>
                                <div className="flex justify-between my-2">
                                    <h1 className='font-semibold'>Bus No : MH20GD1052</h1>
                                    <h1 className='font-semibold'>Seat Number : 13</h1>
                                </div>
                                <div className="flex justify-between my-2">
                                    <h1 className='font-semibold'>Date : {item.date}</h1>
                                    <h1 className='font-semibold bg-orange-300 p-2 rounded-lg'>To : {item.Place}</h1>
                                </div>
                            </div>



                        </>)
                    }




                </div>


            </div>




            <Footer />

        </>

        : <>

            <div className="h-[64vh] mx-auto mt-32 text-center">


                <h1 className='text-3xl font-semibold text-red-600'>Opps! You Have No Bookings</h1>
                <Link to={"/"} class="mt-3 btn btn-primary">Book Tours</Link>

            </div>

        </>
}

export default MyBookings