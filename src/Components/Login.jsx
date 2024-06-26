import { useState } from "react";
import {useNavigate, Link } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",

    });



    // to store value in localStorage
 

    
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
   
       const checkCradintial = loggedUser.find(itm => itm?.emil === input?.email || itm?.password === input?.password);

       console.log(checkCradintial);


       console.log(checkCradintial);


       
       if (checkCradintial) {
        localStorage.setItem("login", true);
        navigate('/user');
       }else{
        alert('email or password is wrong')
       }


        // if(input.email === loggedUser.email && input.password === loggedUser.password){
        //     {   
        //         localStorage.setItem("login", true);
        //         navigate('/user');
        //     }
        // }else if(input.email === typeof(null) && input.password.length <1){
        //     alert("you are rejects")
        // }
        // else{
        //     alert("wrong Email or Password")
        // }
        
    }


    return (
        <div className="hero min-h-screen bg_img1">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-300 px-10">
                    <h1 className='mt-5 mx-auto text- xl font-bold'>Login!!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email"
                                value={input.email}
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password"
                                value={input.password}
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-4/6 mx-auto">Login</button>
                        </div>
                    </form>
                    <div className='my-5 flex'>
                        <p>DoNot have an account?</p>
                        <Link to={"/register"} className='underline font-medium'>Register here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;