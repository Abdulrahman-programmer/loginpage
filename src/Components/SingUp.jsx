import { use, useState } from "react";
import "./components.css"

function SignUp() {

    const [visibility, setVisiblity] = useState("password")

    return (
        <div className="box ">
            <h1 className="text-5xl pt-10 text-gray-700 text-center">Sign up</h1>
            <form action="" method="post" className="flex flex-col p-10">

                <label htmlFor="gst" className="text-gray-500">GST no.</label>
                <input type="text" name="gst" id="gstNo" required className="ip" />

                <label htmlFor="Name" className="text-gray-500">Name</label>
                <input type="text" name="Name" id="name" required className="ip" />

                <label htmlFor="email" className="text-gray-500">Email</label>
                <input type="email" name="email" id="email" required className="ip" />

                <label htmlFor="password" className="text-gray-500">password</label>
                <input type={visibility} name="password" id="password" required className="ip" />
                <div >
                    <input
                        type="checkbox"
                        onChange={(e) => setVisiblity(e.target.checked ? "text" : "password")}
                        className="mr-1.5"
                    />  <p className="inline text-gray-500 ">show password</p>
                </div>
                <input type="submit" value="Sign up" className="btn mt-10" />
            </form>

        </div>
    )
}

export default SignUp;
