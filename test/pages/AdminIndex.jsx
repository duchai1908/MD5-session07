import React from 'react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function AdminIndex() {
    const isLogin = true;
    const navigate = useNavigate();

  return (
    <div>
        <nav style={{display:"flex", gap: 20}}>
            <NavLink end to={"/admin"}>Dashboard</NavLink>
            <NavLink to={"/admin/manage-user"}>Manager User</NavLink>
            <NavLink to={"/admin/manage-product"}>Mangager Product</NavLink>
            <button onClick={()=> navigate(-1)}>Trang trước</button>
            <button onClick={()=> navigate(1)}>Trang sau</button>
        </nav>
        {isLogin ? <Outlet/> : <Navigate to="/login" />}
        <footer>Footer</footer>
    </div>
  )
}
