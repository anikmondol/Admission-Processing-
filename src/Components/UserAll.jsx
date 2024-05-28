import { useNavigate } from "react-router-dom";

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
                        <h2 className="text-2xl font-semibold">Logged in User Details</h2>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-700">
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
                                        Age
                                    </th>
                                    <th scope="col" className="p-4">
                                        Course
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {loggedUser.map((user, index) => (
                                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4">{user.name}</td>
                                        <td className="p-4">{user.email}</td>
                                        <td className="p-4">{user.address}</td>
                                        <td className="p-4">{user.phone}</td>
                                        <td className="p-4">{user.age}</td>
                                        <td className="p-4">{user.course}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={handleLogout} className="btn bg-green-500">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default UserAll;
