

const AdminTable = () => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    
    return (
        <div>
            <div className="max-w-3xl p-8 sm:flex sm:space-x-6  mx-auto  mt-20">
             
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-center">All The User Here</h2>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
                                    <th scope="col" className="p-4">
                                        DELETE
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" ">
                                {loggedUser.map((user, index) => (
                                    <tr key={index} className="">
                                        <td className="p-4">{user.name}</td>
                                        <td className="p-4">{user.email}</td>
                                        <td className="p-4">{user.address}</td>
                                        <td className="p-4">{user.phone}</td>
                                        <td className="p-4">{user.fatherName}</td>
                                        <button className="p-4">remove</button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTable;