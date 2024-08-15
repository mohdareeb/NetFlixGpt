import Header from "./Header";

const Login=()=>{
    return (
        <div>
            <Header/>
            <div className="flex justify-center">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg"
                alt = "backgroundImage"/>
                <div className="bg-black bg-opacity-65 absolute mt-48">
                    <h2 className="text-white font-bold px-8 py-4" >Sign In</h2>
                    <form className="p-2  w-[340px] h-[230px]">
                        <input className="m-2 p-1 rounded-lg w-[300px] shadow-lg" type="text" placeholder="Email or mobile number"/><br/>
                        <input className="m-2 p-1 rounded-lg w-[300px] shadow-lg" type="password" placeholder="Password"/>
                        <button className=" m-2 p-1 bg-red-700 w-[300px]">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;