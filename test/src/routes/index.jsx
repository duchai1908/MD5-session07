import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import CourseDetail from "../../pages/CourseDetail";
import ListCourse from "../../pages/ListCourse";
import NotFound from "../../pages/NotFound";
import AdminIndex from "../../pages/AdminIndex";
import ManagerUser from "../../pages/ManagerUser";
import ManagerProduct from "../../pages/ManagerProduct";
import Dashboard from "../../pages/Dashboard";
import Invoices from "../../pages/Invoices";
import HomeIndex from "../../pages/HomeIndex";
import InvoicesIndex from "../../pages/InvoicesIndex";
import InvoicesCreate from "../../pages/InvoicesCreate";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/list-course",
        element: <ListCourse/>
    },
    {
        path: "/course-detail/:id",
        element: <CourseDetail/>
    },
    {
        path:"*",
        element:<NotFound/>
    },
    {
        path:"/admin",
        element: <AdminIndex/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path:"manage-user",
                element: <ManagerUser/>
            },
            {
                path:"manage-product",
                element: <ManagerProduct/>
            },
            {
                path:"invoices",
                element: <Invoices/>
            }
        ]
    },
    {
        path:"/ex",
        element: <HomeIndex/>,
        children: [
            {
                index:true,
                element: <Home/>
            },
            {
                path: "invoices",
                element: <InvoicesIndex/>,
                children:[
                    {
                        index:true,
                        element:<Invoices/>
                    },{
                        path: "creates",
                        element: <InvoicesCreate/>
                    }
                ]
            }
        ]
    }

  ])
  export default routes;