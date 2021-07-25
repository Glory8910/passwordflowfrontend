
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "./Login";


export default function Register() {

    let initialstate = {
        name: "",
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

        fetch('https://passwordresetflowmethod.herokuapp.com/users/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
            .then(response => response.json())
            .then(data => {
               
                if(data.err){
                    alert("error has occured",data.err.name)
                }
                else{
                alert("you have sucessfuly registered you can now login to your account")
                }
            })
            .catch((error) => {
                alert("error has occured",error)
             
            });


        setDetails(initialstate)

    }

    return (
        <>
            <div className="container">

                <h1 >Register</h1>

                <form className="col-6 " onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="form-control" id="Name" onChange={handlechange} name="name" value={details.name} placeholder="Enter Name" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={details.email} onChange={handlechange} name="email" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={details.password} onChange={handlechange} placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="row" >
                        <Link className="btn btn-primary " to="/login">Login</Link>

                    </div>
                </form>

            </div>
        </>
    )
}