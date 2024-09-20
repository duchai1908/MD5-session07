import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HomeIndex() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-red-500">Rikkei Academy</h1>
      <div className="actions">
        <Link to={"/ex/invoices"} className="text-blue-600">
          Invoices
        </Link>{" "}
        |{" "}
        <Link to={"expenses"} className="text-blue-600">
          Expenses
        </Link>
      </div>
      <div className="h-[2px] bg-black mt-5 mb-5" />
      <Outlet />
      <h1>hihi</h1>
    </div>
  );
}
