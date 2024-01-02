import React from 'react'
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"
import Footer from './Footer'
import * as yup from "yup"
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegister } from '../redux/actions/Action'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Register = () => {



    const Dispatch = useDispatch()

    const navi = useNavigate()

    const formik = useFormik({
        initialValues: {

            uname: "",
            password: "",
            name: "",
            DOB: "",
            mobile: "",
            cpassword: "",
            lname: "",
            email: "",
            state: "",
            values: ""

        },
        validationSchema: yup.object({

            uname: yup.string().required().min(2),
            password: yup.string().required().min(3),
            name: yup.string().required().min(2),
            DOB: yup.string().required(),
            mobile: yup.string().required().min(8),
            cpassword: yup.string().required().oneOf([yup.ref("password")], "Password and cpassword does not match"),
            lname: yup.string().required(),
            email: yup.string().required(),
            state: yup.string().required(),
        })



        ,

        onSubmit: (values, { resetForm }) => {


            Dispatch(UserRegister(values))
            navi("/")
            toast.success("Register Successfully")



        }
    })


    const signUpFn = e => {
        if (formik.errors) {
            const dddd = Object.keys(formik.errors)
            toast.error(dddd[0])
        }

    }






    return <>

        <div className="">


            <div className="mt-4 mb-0 bg-cover h-80  bg-[url('https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXIlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
                <div className="h-full w-full   bg-black bg-opacity-50">
                    <h1 className='lg:text-6xl text-5xl text-white opacity-100 font-bold space-x-10 hover:scale-95 text-center pt-32'>Register</h1>

                </div>

            </div>



            <form onSubmit={formik.handleSubmit} className="m-12">

                <h1 className='font-normal'>After creating an account, you'll be able to track your payment status, track the confirmation and you can also rate the tour after you finished the tour.</h1>
                {/* Forms */}
                <div className="form mt-6">

                    {/* UserName */}
                    <div className="">
                        <h1>Username *</h1>
                        <input {...formik.getFieldProps("uname")} type="text" className='lg:w-[50%] w-full rounded-md input mt-5 border-2 border-slate-300' />

                    </div>
                    {/* Other Inputs */}

                    <div className="flex lg:flex-row flex-col items-center gap-6 mt-5 w-full">

                        <div className="w-full">
                            <div className="mt-5">
                                <h1 className=''>Password *</h1>
                                <input {...formik.getFieldProps("password")} type="text" className=' w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>
                            <div className="mt-5">
                                <h1 className=''>First Name *</h1>
                                <input {...formik.getFieldProps("name")} type="text" className=' w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>
                            <div className="mt-5">
                                <h1 className=''>Birth Date *</h1>
                                <input {...formik.getFieldProps("DOB")} type="date" className='w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>
                            <div className="mt-5">
                                <h1 className=''>Phone *</h1>
                                <input {...formik.getFieldProps("mobile")} type="number" className=' w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>

                        </div>



                        <div className="w-full">
                            <div className="mt-5">
                                <h1>Confirm Password *</h1>
                                <input {...formik.getFieldProps("cpassword")} type="text" className=' w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>
                            <div className="mt-5">
                                <h1>Last Name *</h1>
                                <input {...formik.getFieldProps("lname")} type="text" className=' w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>
                            <div className="mt-5">
                                <h1>Email *</h1>
                                <input {...formik.getFieldProps("email")} type="email" className='w-full rounded-md input mt-3 border-2 border-slate-300' />
                            </div>
                            <div className="mt-5">
                                <h1>State *</h1>
                                <select {...formik.getFieldProps("state")} className="select mt-3 select-bordered w-full border-2 border-slate-300">
                                    <option disabled selected>Maharashart</option>
                                    <option>MP</option>
                                    <option>Maharashart</option>
                                    <option>UP</option>
                                    <option>Hariyana</option>
                                    <option>Chhatisgadh</option>
                                    <option>Telangana</option>
                                    <option>Jammu Kashmir</option>
                                    <option>Bihar</option>
                                    <option>Jharkhand</option>
                                </select>

                            </div>

                        </div>





                    </div>
                </div>
                {/* Terms and conditions */}

                <div className="text-base gap-1 flex items-center justify-center mt-16">
                    <input value={"yes"} {...formik.getFieldProps("terms")} id='cc' type="checkbox" className='checkbox checkbox-warning' />
                    <label htmlFor="cc">
                        * Creating an account means you're okay with our <strong className='text-orange-500'>Terms of Service</strong> and <strong className='text-orange-500'>Privacy Statement.</strong>.
                    </label>

                </div>


                {/* sign Up Btn */}
                <div className="my-8 mx-8">
                    <button onClick={e => signUpFn()} type="submit" className="hover:bg-orange-600 transition-all duration-700 btn h-14 text-white font-medium bg-orange-500 w-full text-center">Sign Up</button>
                </div>
            </form>
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

                <Link to={"/login"} className='text-xl font-bold'>ALREADY A MEMBER?</Link>
                <Link to={"/login"} className='text-rose-500 text-xs mt-3 font-semibold'>LOGIN</Link>

            </div>


            <Footer />



        </div>




    </>
}

export default Register