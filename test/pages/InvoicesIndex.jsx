import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function InvoicesIndex() {
  return (
    <div>
    <h2 className="font-bold">Invoices</h2>
    <Link to={'/ex/invoices/creates'} className="text-blue-600">
      Create New Invoices
    </Link>

    <div className="flex gap-10">
      <div className="actions flex flex-col border-r-2 border-black pr-5">
        <Link to={'/invoices/google'} className="text-blue-600">
          Google
        </Link>
        <Link to={'/invoices/apple'} className="text-blue-600">
          Apple
        </Link>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  </div>
  )
}
