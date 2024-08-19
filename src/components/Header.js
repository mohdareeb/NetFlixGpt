import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { removeUser } from "../utils/userSlice";
const Header=()=>{
    const user = useSelector(store=>store.user)
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const handlesignOut=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/");
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
            console.log(error);
        });
        console.log("This is sognout ")
    }
   return (
        <div className="absolute w-full h-20 bg-black bg-gradient-to-b flex justify-between">
            <img className="mt-2 px-4  w-52"    src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="Netflix"/>
            {/* <img src ={user.photoUrl}/> */}
            {user && <button onClick={handlesignOut} className="text-white border border-white rounded-lg mx-2 my-4 px-2 hover:bg-gray-400">Sign Out</button>}
        </div>
   )
    
}

export default Header;