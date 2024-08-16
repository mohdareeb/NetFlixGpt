import Header from "./Header";
import { useRef, useState } from "react";
import {validate} from "../utils/validate";

const Login=()=>{
    const [signin,setSignin] = useState(true);
    const email = useRef(null);
    const pass = useRef(null);
    const [errormsg,setErrormsg] = useState(null);
    const toggleForm=()=>{
        setSignin(!signin);
    }
    const handleButtonClick=()=>{
        if(validate(email.current.value,pass.current.value)!=null) setErrormsg("Invaid Email Or Password")
        
    }
    return (
        <div>
            <Header/>
            <div className="flex justify-center">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg"
                alt = "backgroundImage"/>
                <div className="bg-black bg-opacity-65 absolute mt-48">
                    {
                        signin ? <h2 className="text-white font-semibold text-3xl  px-8 py-4" >Sign In</h2> :
                                <h2 className="text-white font-semibold text-3xl  px-8 py-4" >Sign Up</h2>
                     
                    }
                    <form onSubmit={(e)=>e.preventDefault()} className="p-2  w-[340px] h-[250px]">
                        {!signin &&  <><input className="m-2 p-1 rounded-lg w-[300px] shadow-lg" type="text" placeholder="Username"/><br/></>}
                        <input className="m-2 p-1 rounded-lg w-[300px] shadow-lg" type="text" ref={email} placeholder="Email or mobile number"/><br/>
                        <input className="m-2 p-1 rounded-lg w-[300px] shadow-lg" type="password" ref = {pass} placeholder="Password"/>
                        {errormsg !=null ? <p className="text-red-600 px-2 ">Invalid Email or Password</p>: null}
                        {signin ? <button className=" m-2 p-1 bg-red-700 w-[300px] " onClick={()=>handleButtonClick()}>Sign In</button> : <button className=" m-2 p-1 bg-red-700 w-[300px]" onClick={()=>handleButtonClick()}>Sign Up</button>}
                        { signin ? <p className="text-white py-2 px-4" onClick={()=>toggleForm()}>If you are new ? Sign Up</p>:
                                    <p className="text-white py-2 px-4" onClick={()=>toggleForm()}>Having a existing account ? Sign In</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;