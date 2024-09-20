import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/admin/manage-user", { state: {username: "Duc Hai"},replace: true});
    }
  return (
    <div>
        <h1>Dashboard</h1>
        {/* <button onClick={handleRedirect}>Manager User</button> */}
        <Link to={"invoices"}>Invoices | </Link>
        <Link>Expenses</Link>
    </div>
  )
}
