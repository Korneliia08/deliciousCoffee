import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DefaultPanel from "./DefaultPanel/DefaultPanel";
import Default from "./DefaultPanel/DynamicSubPages/Default/Default";
import Products from "./DefaultPanel/DynamicSubPages/Products/Products";
import {Provider} from "react-redux";
import React from "react";
import store from "./data/store";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>,
            children: [
                {
                    path: "/",
                    element: <Default/>
                },
                {
                    path: "/products",
                    element: <Products/>
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/"/>
        }
    ], {basename: "/deliciousCoffee"});
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
}

export default App;
