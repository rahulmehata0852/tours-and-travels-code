import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminDeleteTours, AdminGetAllTours } from '../../redux/actions/adminActions'
import Footer from '../../Pages/Footer'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { invalidate } from '../../redux/Slices/adminSlice'
import { Link } from 'react-router-dom'

const AdminAllToursList = () => {


    const { tours, deleteTours } = useSelector(state => state.admin)
    const dispatch = useDispatch()

    const [selectedTour, setselectedTour] = useState(null)


    useEffect(() => {

        dispatch(AdminGetAllTours())

    }, [])

    useEffect(() => {
        if (deleteTours) {
            toast.error("Tour Delete Successfully")
            dispatch(AdminGetAllTours())
            dispatch(invalidate())


        }
    }, [deleteTours])



    return <div className='bg-stone-100'>

        <div className="">


            <div className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                <div className="h-full w-full   bg-black bg-opacity-50">
                    <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>All Tours</h1>

                </div>
            </div>

            <div className="flex justify-between mx-8">
                <button className="btn btn-primary ms-4 mt-6"><Link to={"/Admin-home"}>Back</Link></button>
                <button className="btn btn-secondary ms-4 mt-6"><Link to={"/addTour"}>Add Tours</Link></button>

            </div>



            <div className="mt-12">
                <div className="lg:grid flex md:gap-5  flex-col items-center justify-center gap-y-16 grid-cols-3">
                    {
                        tours && tours.map(item => <>

                            <div className="card lg:w-full w-96 bg-base-100 shadow-xl">
                                <figure className='flex'><img className='pt-5 h-72 w-72 hover:scale-110 transition-all duration-300' src={item.imageAddress} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title justify-between ">
                                        <div className="flex gap-4 items-center">
                                            {item.Place}
                                            <div className="badge badge-secondary text-xs">{item.time}</div>
                                        </div>
                                        <div className="">
                                            <h1 className='text-rose-500 text-xl'><AiOutlineDelete
                                                onClick=
                                                {
                                                    () => {
                                                        document.getElementById('my_modal_1').showModal(),
                                                            setselectedTour(item.id)
                                                    }} className='text-rose-600 btn-outline btn-error text-2xl' /></h1>
                                        </div>


                                    </h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions mt-5 justify-between">
                                        <div className="">

                                            <div className='badge font-semibold badge-warning px-4 py-2'>Price : {item.price}</div>

                                        </div>

                                        <div className="flex gap-1">
                                            <div className="badge badge-outline">{item.date}</div>
                                            <div className="badge badge-outline">Reviews: {item.review}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">

                                    </div>

                                </div>
                            </div>

                        </>)
                    }
                </div>


            </div>

        </div>



        {/* modal st */}


        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className=" modal">
            <div className="modal-box bg-orange-400">
                <h3 className="font-bold text-lg">Hey!</h3>
                <p className="py-4 text-xl font-bold text-sky-500">Are You sure to Delete This Tour 😲😲</p>
                <div className="modal-action">
                    <form className='flex gap-3' method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn ">Close</button>
                        <button onClick={e => dispatch(AdminDeleteTours(selectedTour))} className="btn btn-neutral">Delete Tour</button>
                    </form>
                </div>
            </div>
        </dialog>


        {/* modal end */}




        <div className="mt-16">
            <Footer />
        </div>
    </div>
}

export default AdminAllToursList