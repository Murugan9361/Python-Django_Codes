import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Producted = () => {

    const isLoggedin=localStorage.getItem("isLoggedin")
  return  isLoggedin? <Outlet/>:<Navigate to="/"/>
}

export default Producted