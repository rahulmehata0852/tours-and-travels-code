import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetTicketDetails } from '../redux/actions/Action'

const TourTicket = () => {


    const { auth, ticket } = useSelector(state => state.users)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTicketDetails(auth.id))
    }, [])


    let LatestTicket = ticket[ticket && ticket.length - 1]



    return ticket && LatestTicket && <>




        <div className="my-7">


            <div className="">


                <Link to={"/"} className=" btn btn-primary">Back To Home</Link>
                <div className="flex items-center gap-2 justify-center">
                    <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 ">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Congratulation {auth.name} Your Ticket is confirmed Booked!</h3>

                </div>

                <div class="bg-gray-100 h-screen">
                    <div class="bg-white p-6  md:mx-auto">
                        <div class="text-center">
                            <p class="text-gray-600 font-semibold my-2">Thank you for Using tours and travel online ticket facility. Your booking details are indicated below.</p>


                            <div className="mx-auto my-12 lg:w-[50%] py-11 px-7 border-4 rounded-lg border-sky-500 shadow-xl bg-orange-400 ">

                                <h1 className='text-start mb-11'><strong>DEAR  {LatestTicket.Fname} (User id: {auth.uname}),</strong><br />

                                    Congratulations! Thank You for using Tours online bus reservation facility. Your booking details are indicated below.


                                </h1>


                                <div className="text-left grid gap-9 md:grid-cols-2 ">
                                    <h1 className='flex gap-2 font-medium'><strong>PNR No:</strong>1000000020</h1>
                                    <h1 className='flex gap-2 font-medium'><strong>BUS No:</strong>MH20GD1052</h1>
                                    <h1 className='flex gap-2 font-medium'><strong>Number of Passengers:</strong>{LatestTicket.nop}</h1>
                                    <h1 className='flex gap-2 font-medium'><strong>Transaction Id:</strong>1000002817903106</h1>
                                    <h1 className='flex gap-2 font-medium'><strong>Date of Tour:</strong> {LatestTicket.date}</h1>
                                    <h1 className='flex gap-2 font-medium'><strong>Up to:</strong>{LatestTicket.Place}</h1>
                                    <h1 className='flex gap-2 font-medium w-64'><strong>Passenger Mobile : number</strong> {LatestTicket.mobile}</h1>
                                    <h1 className='flex gap-2 font-medium w-64'><strong>Distance:</strong>250KM </h1>


                                </div>
                                <div className="text-left my-9">
                                    <h1 className='text-2xl text-sky-400 font-bold'>Passenger Details </h1>

                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th>Sr No.</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Status</th>
                                                    <th>Seat number</th>
                                                </tr>
                                            </thead>

                                            <tbody>


                                                <tr>
                                                    <td>1</td>
                                                    <td>{LatestTicket.Fname}</td>
                                                    <td> {LatestTicket.age}</td>
                                                    <td>{LatestTicket.Gender}</td>
                                                    <td>Confirmed</td>
                                                    <td>13</td>
                                                </tr>


                                            </tbody>



                                        </table>
                                    </div>



                                    <h1 className='text-xl  text-sky-400 font-bold my-6'>Fare Details </h1>


                                    <div className="flex">

                                        <div className=" flex flex-col gap-2 w-full items-center">
                                            <h1 className='bg-sky-300 p-2 rounded-lg'>Ticket Fare</h1>
                                            <h1 className='font-medium'>Rs {LatestTicket.price * LatestTicket.nop}</h1>
                                        </div>

                                        <div className=" flex flex-col gap-2 md:w-full items-center">
                                            <h1 className='bg-sky-300 p-2 rounded-lg'>Convenience Fee</h1>
                                            <h1 className='font-medium'>Rs 200</h1>
                                        </div>

                                        <div className=" flex flex-col gap-2 w-full items-center">
                                            <h1 className='bg-sky-300 p-2  rounded-lg'>Total Fare</h1>
                                            <h1 className='font-medium'>Rs {+LatestTicket.price * LatestTicket.nop + 200} </h1>
                                        </div>



                                    </div>







                                </div>
                                <h1 className='mt-10 gap-2 text-info flex items-center text-left font-bold  text-2xl'>Thanks For visiting Tours and travels <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className='h-9    w-9 rounded-full' alt="" /></h1>
                                <hr className='text-black bg-black h-[2px]   mt-4 ' />
                                <hr className='text-black bg-black h-[1px]   ' />
                                <div className="">

                                    <h1 className='text-info flex items-center text-left font-bold  text-2xl mt-6'>Must Read :</h1>
                                    <hr className='text-black bg-black h-[2px] mt-2' />
                                    <h1 className=''>
                                        <li className='ps-4 w-full text-base text-left'>Please Take a screenshoot of ERS i.e Virtual Reservation Message (VRM) OF YOUR TICET FROM YOUR BOOKED TICKETS HISTORY PAGE. You have to carry this VRM or SMS send to to along with any Govt. authorized ID card during train journey in original. Both the SMS or VRM& original ID will be examined by ticket.</li>

                                    </h1>


                                </div>


                            </div>








                        </div>
                    </div>
                </div>



            </div>


        </div>





    </>
}

export default TourTicket