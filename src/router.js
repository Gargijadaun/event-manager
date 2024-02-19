import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Component/pageComponent/Layout';
import Home from './Component/homeComponent/Home';
import FQ from './Component/pageComponent/FQ';
import Stall from './Component/pageComponent/Stall';
import Emergency from './Component/pageComponent/Emergency';
import Another from './Component/pageComponent/Another';
import Gallery from './Component/pageComponent/Gallery';

const ReactRouter = () => {


    const router  = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/layout1",
            element:<Layout/>
        },
        {
            path:"/fq",
            element:<FQ/>
        },
        {
            path:"/gallery",
            element:<Gallery/>
        },
        {
            path:"/stall",
            element:<Stall/>
        },
        {
            path:"/emergency",
            element:<Emergency/>
        },
        {
            path:"/another",
            element:<Another/>
        },
    ]);

    return <RouterProvider router = {router}/>
}
export default ReactRouter;