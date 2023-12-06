import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DefaultPanel from "./DefaultPanel/DefaultPanel";
import Default from "./DefaultPanel/DynamicSubPages/Default/Default";

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
            ]
        },
        {
            path: "*",
            element: <Navigate to="/"/>
        }
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
