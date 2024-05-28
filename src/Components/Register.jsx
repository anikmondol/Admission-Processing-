import '../Css/Register.css'

const Register = () => {
    return (
        <div className="hero min-h-screen bg_img">
            <div className="hero-content flex-col lg:flex-row-reverse">


                

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-10">
                <h1 className='mt-5 mx-auto text- xl font-bold'>CREATE AN ACCOUNT</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-4/6 mx-auto">Login</button>
                        </div>
                    </form>
                    <div className='my-5 flex'>
                        <p>Have already an account?</p>
                        <a href="#" className='underline font-medium'>Login here</a>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default Register;