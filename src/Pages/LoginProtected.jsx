import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginProtected = ({ compo }) => {

    const { auth } = useSelector(state => state.users)

    return auth ? compo : <>
        {

            toast.warn("Please LogIn To View This Page")
        }
        < Navigate to={"/login"} />
    </>
}

export default LoginProtected