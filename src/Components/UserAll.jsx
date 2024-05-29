import { Link, useNavigate } from "react-router-dom";

const UserAll = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("login");
        navigate('/login')
    }

    const loggedUser = JSON.parse(localStorage.getItem("user"));
    

    return (
        <div>
            <div className="max-w-3xl p-8 sm:flex sm:space-x-6  mx-auto  mt-20">
             
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-3xl font-semibold text-center ">Logged in User Details</h2>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-slate-400">
                        <table className="min-w-full divide-y ">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="p-4">
                                        Name
                                    </th>
                                    <th scope="col" className="p-4">
                                        Email
                                    </th>
                                    <th scope="col" className="p-4">
                                        Address
                                    </th>
                                    <th scope="col" className="p-4">
                                        Phone
                                    </th>
                                    <th scope="col" className="p-4">
                                        Father
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {loggedUser.map((user, index) => (
                                    <tr key={index} className=" hover:bg-orange-400">
                                        <td className="p-4">{user.name}</td>
                                        <td className="p-4">{user.email}</td>
                                        <td className="p-4">{user.address}</td>
                                        <td className="p-4">{user.phone}</td>
                                        <td className="p-4">{user.fatherName}</td>
                                    </tr>
                                ))}
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
