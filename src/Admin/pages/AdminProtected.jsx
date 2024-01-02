import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const AdminProtected = ({ compo }) => {

    const { auth } = useSelector(state => state.admin)

    return auth ? compo : toast.dark("Please Login To view This page")
}

export default AdminProtected