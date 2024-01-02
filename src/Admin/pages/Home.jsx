import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Pages/Footer'

const AdHome = () => {
    return <>


        <div className="">

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className="btn m-1 btn-primary btn-md w-32 ">Get Started</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] bg-black menu p-2 shadow  rounded-box w-52">
                                <li className='text-white my-2 hover:bg-slate-400 rounded-xl'><Link className='text-base font-medium font-serif hover:text-white' to={"/AdminAllTours"}>All Tours</Link></li>

                                <li className='text-white hover:bg-slate-400 rounded-xl'><Link className='text-base font-medium font-serif hover:text-white' to={"/addTour"}>Add Tours</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="mt-12"></div>
        <Footer />
    </>
}

export default AdHome