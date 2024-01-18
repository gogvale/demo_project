import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Catalog from "./pages/Catalog.jsx";
import Item from "./pages/Item.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Catalog/>,
    },
    {
        path: "items",
        element: <Catalog/>,
    },
    {
        path: "items/:item_id",
        element: <Item/>,
    },
    {
        path: "cart",
        element: <Cart/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <Navbar/>
            {/*Add some padding on the sides, make it like facebook*/}
            <RouterProvider router={router}/>
        </>
    </React.StrictMode>,
)
