import "./components.css"
import { use, useState } from "react";


import {
    useNavigate
} from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    const [visibility, setVisiblity] = useState("password");
    return (
        <div className="box " >
            <h1 className="text-5xl pt-10 text-gray-700 text-center">Login</h1>
            <form action="" method="post" className="flex flex-col p-10  pb-5">

                <label htmlFor="email" className="text-gray-500">Email</label>
                <input type="email" name="email" id="email" required className="ip" />

                <label htmlFor="password" className="text-gray-500">password</label>
                <input type={visibility} name="password" id="password" required className="ip" autoComplete="on"/>
                <div >
                    <input
                        type="checkbox"
                        onChange={(e) => setVisiblity(e.target.checked ? "text" : "password")}
                        className="mr-1.5 "
                    /> <p className="inline text-gray-500 ">show password</p>
                </div>
                <input type="submit" value="Login" className="btn mt-10" />

            </form>
            <p className="pb-10 text-center">
                Don't have an account?
                <button className="text-blue-500 pl-1 hover:underline" onClick={() => navigate('/signup')}>Register</button>
            </p>
        </div>
    )
}

export default Login;