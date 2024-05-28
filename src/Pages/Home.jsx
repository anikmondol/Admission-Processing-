import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const userName = JSON.parse(localStorage.getItem("user")) ;

    const handleLogout = () =>{
        localStorage.removeItem("login");
        navigate('/login')
    }

    return (
        <div className="mt-16">
           <h1 className="text-2xl font-medium">HomePage</h1>
           <p>Welcome: {userName.name}</p>
           <button onClick={handleLogout} className="btn bg-green-500">Logout</button>
        </div>
    );
};

export default Home;