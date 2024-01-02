import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminLogIn } from '../../redux/actions/adminActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const [userResponse, setuserResponse] = useState({})

    const { auth, error } = useSelector(state => state.admin)

    const handleChnage = e => {
        setuserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()

    const handleSubmit = e => {
        console.log(userResponse);
        dispatch(AdminLogIn(userResponse))
    }

    const navi = useNavigate()
    useEffect(() => {
        if (auth) {
            toast.success("Admin Login SuccessFully")
            navi("/Admin-home")
        }
    }, [auth])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])




    return <>


        <div class="flex  lg:flex-row flex-col gap-3 h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')]">
            <div class="rounded-xl lg:mt-3 mt-28 bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div class="text-white ">
                    <div class="mb-8 flex flex-col items-center">
                        <img src="https://media.istockphoto.com/id/823686906/photo/woman-touching-a-global-network-connection-omni-channel-and-communications-concept.webp?b=1&s=170667a&w=0&k=20&c=4K9i5SWUlXSH1PHRxArQg9DNewRfQsdZWEhM6eACs9o=" width="150" alt="" srcset="" />
                        <h1 class="mb-2 text-2xl">Admin Login</h1>
                        <span class="text-gray-300">Enter Login Details</span>
                    </div>
                    <div >
                        <div class="mb-4 text-lg">
                            <input value={userResponse.name} onChange={handleChnage} className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="email" name="email" placeholder="id@email.com" />
                        </div>

                        <div class="mb-4 text-lg">
                            <input value={userResponse.password} onChange={handleChnage} className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" />
                        </div>
                        <div class="mt-8 flex justify-center text-lg text-black">
                            <button onClick={handleSubmit} type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <label className="swap swap-flip font-bold">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on cursor-default text-white w-96 ps-9 font-sans bg-rose-500 p-4 rounded-lg">
                    <h1 className='text-2xl '>Hey ,
                        <br />Only For You..</h1>

                    <span>Email : rahulmahato0852@gmail.com</span>
                    <br />
                    <span>Password : 1234</span>
                    <h1 className='text-right text-black'>!Copy 😁</h1>



                </div>
                <div className="text-8xl flex items-center swap-off text-center">
                    <div className="chat text-2xl chat-end">
                        <div className="chat-bubble  lg:w-96 p-4 ">Heyy, Wait Wait, You underestimate my power! </div>
                    </div>
                    😀
                </div>
            </label>

        </div>




    </>
}

export default AdminLogin