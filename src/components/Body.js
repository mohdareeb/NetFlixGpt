import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from "./Login"
import Browser from "./Browse"

const Body =()=>{
    const router = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",
                element:<Browser/>
            }
        ]
    )
    
    return (
        <RouterProvider router ={router}/>
    )
}

export default Body;