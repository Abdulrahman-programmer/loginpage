import "./login.css"

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    return(
        <div className="box">
            <h1 className="pl-10 text-5xl mb-5">Sing in</h1>

            <label htmlFor="Email" className="pl-11" >Email</label>
            <input type="email" name="Email" id="" className="ip" required/>

            <label htmlFor="password" className="pl-11" >Password</label>
            <input type="password" name="password" id="" className="ip" required/>

            <input type="submit" value="Sign in" className="btn" />

            <p className="text-center mt-3">Don't have an account?  
                <button className="pl-1 text-blue-500 hover:underline" onClick={() => navigate("/signup")}> Register</button>
            </p>
            
            
        </div>
    )
}

export default Login;