import React,{useState} from "react";



export default function ForgotPassword(){
    let initialstate={
        
        email: "",
      
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

        fetch('https://passwordresetflowmethod.herokuapp.com/users/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
            .then(response => response.json())
            .then(data => {
      
                if(data.err){
                    alert("mail id not found")
                }
                else{
                    alert("check your mail to reset your password")
                }
               
            })
            .catch((error) => {
                // console.error('Error:', error);
            });

        

        setDetails(initialstate)

    }

    return (
        <>
            <div className="container">
                
            <h1>ForgotPassword</h1>

                <form className="col-6 " onSubmit={handleSubmit}>
                   
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={details.email} onChange={handlechange} name="email" placeholder="Enter email" />

                    </div>
                  

                    <button type="submit" className="btn btn-primary">Reset</button>
             
                </form>
               
            </div>
        </>
    )
}