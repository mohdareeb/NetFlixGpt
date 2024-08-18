import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from "./Login"
import Browser from "./Browse"
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";

const Body =()=>{
    const dispatch=useDispatch();
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
    useEffect(()=>{
        
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(user);
            dispatch(addUser({id:user.uid,email:user.reloadUserInfo.email,name:user.displayName}))
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser);
            console.log("userSIgnedout")
        }
        });
    },[])
    
    return (
        <RouterProvider router ={router}/>
    )
}

export default Body;