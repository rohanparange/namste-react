import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/layouts/Header";
import Body from "./components/layouts/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestroMenu from "./components/Restraurant/RestroMenu";

const AppLayout = ()=>{
    return (<div className="App">
        <Header/>
        <Outlet />
    </div>)
} 

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/restruant/:resId',
                element:<RestroMenu />
            },
        ],
        errorElement:<Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)