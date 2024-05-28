import { useEffect, useState } from 'react';
import '../Css/Register.css';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // Initialize state with users from localStorage or as an empty array
    const [allUser, setAllUser] = useState(() => {
        const savedUsers = localStorage.getItem('user');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        age: "",
        course: ""
    });

    // Update localStorage whenever allUser changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(allUser));
    }, [allUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllUser([...allUser, input]);
        navigate('/login'); // Navigate to login after registering
    };

    return (
        <div className="hero min-h-screen bg_img">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-10">
                    <h1 className='mt-5 mx-auto text-xl font-bold'>CREATE AN ACCOUNT</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                name="name"
                                value={input.name} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="text" 
                                placeholder="Name" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                name="email"
                                value={input.email} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="email" 
                                placeholder="Email" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                name="password"
                                value={input.password} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="password" 
                                placeholder="Password" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input 
                                name="address"
                                value={input.address} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="text" 
                                placeholder="Address" 
                                className="input input-bordered" 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input 
                                name="phone"
                                value={input.phone} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="text" 
                                placeholder="Phone" 
                                className="input input-bordered" 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input 
                                name="age"
                                value={input.age} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="number" 
                                placeholder="Age" 
                                className="input input-bordered" 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course</span>
                            </label>
                            <input 
                                name="course"
                                value={input.course} 
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} 
                                type="text" 
                                placeholder="Course" 
                                className="input input-bordered" 
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-4/6 mx-auto">Register</button>
                        </div>
                    </form>
                    <div className='my-5 flex'>
                        <p>Already have an account?</p>
                        <Link to="/login" className='underline font-medium'>Login here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
