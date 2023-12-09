import './App.css';
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import DefaultPanel from "./DefaultPanel/DefaultPanel";
import Products from "./DefaultPanel/DynamicSubPages/Products/Products";
import {Provider} from "react-redux";
import React from "react";
import store from "./data/store";
import CartSubPage from "./DefaultPanel/DynamicSubPages/CartSubPage/CartSubPage";
import Default from "./DefaultPanel/DynamicSubPages/Default/Default";
import InfoProduct from "./DefaultPanel/DynamicSubPages/InfoProduct/InfoProduct";

import 'react-loading-skeleton/dist/skeleton.css'
import {SkeletonTheme} from 'react-loading-skeleton';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>,
            children: [
                {
                    path: "/products",
                    element: <Outlet/>,
                    children: [
                        {
                            path: "",
                            element: <Products/>
                        },
                        {
                            path: ":id",
                            element: <InfoProduct/>
                        },
                    ]
                },
                {
                    path: "/cart",
                    element: <CartSubPage/>
                },
                {
                    path: '',
                    element: <Default/>
                },
            ]
        },
        {
            path: "*",
            element: <Navigate to="/"/>
        }
    ], {basename: "/deliciousCoffee"});
    return (
        <div className="App">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Provider store={store}>
                    <RouterProvider router={router}/>
                </Provider>
            </SkeletonTheme>
        </div>
    );
}

export default App;
