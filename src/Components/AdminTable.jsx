import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const UserAll = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("login");
        navigate('/login');
    }

    const [loggedUser, setLoggedUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || [];
    });

    const handleDelete = (index) => {
        const updatedUsers = loggedUser.filter((user, i) => i !== index);
        setLoggedUser(updatedUsers);
        localStorage.setItem("user", JSON.stringify(updatedUsers));
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(loggedUser));
    }, [loggedUser]);

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-3xl p-8 sm:flex sm:space-x-6 ">
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-3xl font-semibold text-center">Logged in User Details</h2>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-slate-400">
                        <table className="min-w-full divide-y">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-4">Name</th>
                                    <th scope="col" className="p-4">Email</th>
                                    <th scope="col" className="p-4">Address</th>
                                    <th scope="col" className="p-4">Phone</th>
                                    <th scope="col" className="p-4">Father</th>
                                    <th scope="col" className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {loggedUser.length > 0 ? (
                                    loggedUser.map((user, index) => (
                                        <tr key={index} className="hover:bg-orange-400">
                                            <td className="p-4">{user.name}</td>
                                            <td className="p-4">{user.email}</td>
                                            <td className="p-4">{user.address}</td>
                                            <td className="p-4">{user.phone}</td>
                                            <td className="p-4">{user.fatherName}</td>
                                            <td className="p-4">
                                                <button 
                                                    onClick={() => handleDelete(index)} 
                                                    className="btn bg-red-500 text-white"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="p-4 text-center">No logged in users</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <button onClick={handleLogout} className="btn bg-green-500">Logout</button>
                        <Link to="/" className="btn bg-green-500">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAll;
