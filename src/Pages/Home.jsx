import { Link } from "react-router-dom";
import wave from '../assets/wave.svg'

const Home = () => {



    const userName = JSON.parse(localStorage.getItem("user"));

  

    console.log(typeof (userName.name));
    return (
        <div className="">
            <h1 className="text-center mt-64 text-4xl font-bold"><span className="bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Welcome To Programming Academy</span></h1>
            <div className=" flex gap-5 justify-center mt-6">
                <Link to="/register"><button  className="btn bg-green-500 text-xl text-white font-medium">Public</button></Link>
                <button className="btn bg-green-500 text-xl text-white font-medium">Admin</button>
            </div>
          
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
      
            
        </div>
    );
};

export default Home;