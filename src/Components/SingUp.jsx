import "./login.css"

function SignUp(){
    return(
        <div className="box">
            <h1 className="pl-10 text-5xl mb-5">Sign Up</h1>

            <label htmlFor="name" className="pl-11">Name</label>
            <input type="text" name="name" className="ip" required/>

            <label htmlFor="Gst no" className="pl-11">Gst no.</label>
            <input type="text" name="Gst no" className="ip" />

            <label htmlFor="Email" className="pl-11" >Email</label>
            <input type="email" name="Email" className="ip" required/>

            <label htmlFor="password" className="pl-11">Password</label>
            <input type="password" name="password" className="ip" required/>

            <input type="submit" value="Sign Up" className="btn" />  
            
        </div>
    )
}

export default SignUp;
