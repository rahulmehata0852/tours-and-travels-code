import React, { useEffect, useState } from 'react'
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogIn } from '../redux/actions/Action'
import { toast } from 'react-toastify'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {


    const [userResponse, setuserResponse] = useState({})
    const { auth, error } = useSelector(state => state.users)

    const handleChange = e => {
        setuserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch()

    const handleSubmit = e => {
        dispatch(UserLogIn(userResponse))
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])


    const navi = useNavigate()

    useEffect(() => {
        if (auth) {
            toast.success("Login Successfully")
            navi("/")
        }
    }, [auth])



    return <>

        <div className="">


            <div className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                <div className="h-full w-full   bg-black bg-opacity-50">
                    <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>Login</h1>

                </div>

            </div>


            {/* Inputs 2 */}
            <div className="mt-16 mb-5 px-12 gap-9 lg:flex-row flex-col flex w-full ">
                <div className="w-full">
                    <h1 className='text-base font-normal text-stone-900'>Username or E-Mail</h1>
                    <input placeholder='Enter Email Here' value={userResponse.email} onChange={handleChange} name='email' type="email" className='mt-3 w-full rounded-lg border-2 border-slate-500 input' />
                </div>
                <div className="w-full">
                    <h1 className='text-base font-normal text-stone-900'>Password</h1>
                    <input placeholder='Enter Password Here' value={userResponse.password} onChange={handleChange} name='password' type="password" className='mt-3 w-full rounded-lg border-2 border-slate-500 input' />
                </div>


            </div>
            {/* /Inputs end */}

            {/* Log In Btn */}
            <div className="my-8 mt-16 mx-8">
                <button onClick={handleSubmit} type="button" className="hover:bg-orange-600 transition-all duration-700 btn h-14 text-white font-medium bg-orange-500 w-full text-center">Log In</button>
                <h1 className='text-right text-orange-500 font-bold mt-2 text-sm'>
                    <Link to={"/register"} >Forgot password</Link>
                </h1>            </div>

            {/* continuew with 3 options */}
            <div className="text-center my-10 flex lg:flex-row flex-col items-center justify-center gap-5">


                <div className="px-7  p-3 flex items-center gap-4 rounded-md text-white bg-blue-600">
                    <BsFacebook />
                    <span>Continue With FaceBook</span>
                </div>


                <div className="px-7 p-3 flex items-center gap-4 rounded-md text-white bg-red-600">
                    <BsGoogle />
                    <span>Continue With <b>Google</b></span>
                </div>


                <div className="px-7 p-3 flex items-center gap-4 rounded-md text-white bg-sky-400">
                    <BsTwitter />
                    <span>Continue With <b>Twitter</b></span>
                </div>



            </div>

            <hr className='' />
            <hr className='' />
            <hr className='mb-8' />


            <div className="my-10 text-center">

                <Link to={"/register"} className='text-xl font-bold'>DO NOT HAVE AN ACCOUNT?</Link>
                <Link to={"/register"} className='text-rose-500 text-xs mt-3 font-semibold'>CREATE AN ACCOUNT</Link>

            </div>



        </div>

        <Footer />



    </>
}

export default Login