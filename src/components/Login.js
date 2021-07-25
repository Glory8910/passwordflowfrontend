import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Login() {
    let initialstate = {

        email: "",
        password: ""
    }

    const [details, setDetails] = useState(initialstate)

    let handlechange = (e) => {

        setDetails(
            {
                ...details,
                [e.target.name]: e.target.value
            }
        )

 
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://passwordresetflowmethod.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
            .then(response => response.json())
            .then(data => {
             
                
                localStorage.setItem("token", data.token)

                if(data.err){
                    alert("error has occured",data.err.name)
                }
                else{
                alert("your sucessfully logged in")
                }
            })
            .catch((error) => {
                let errors=error;
            });

 

        setDetails(initialstate)

    }

    return (
        <>
            <div className="container">

                <h1>Login</h1>

                <form className="col-6 " onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={details.email} onChange={handlechange} name="email" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={details.password} onChange={handlechange} placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                    <div className="row" >
                        <Link className="btn btn-primary" to="/forgotpassword">Forgot Password</Link>

                    </div>
                </form>

            </div>
        </>
    )
}