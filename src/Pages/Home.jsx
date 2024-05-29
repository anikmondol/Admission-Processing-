import { Link } from "react-router-dom";
import wave from '../assets/wave.svg'

const Home = () => {



    // const userName = JSON.parse(localStorage.getItem("user"));




    return (
        <div>
            <div
                style={{
                    zIndex: 900
                }}
                className="absolute top-0 left-0 right-0 bottom-0 z-50">
                <h1 className="text-center mt-64 text-2xl md:text-4xl font-bold"><span className="bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Welcome To Programming Academy</span></h1>
                <p className="text-center py-3 px-5 md:px-5">Programming academies provide a valuable pathway for those looking to enter or advance in the tech industry, offering specialized training and support to help students achieve their career goals.These academies cater to a range of students, from complete beginners to experienced professionals looking to enhance their skills or learn new technologies. Here are some key aspects of programming academies</p>
                <div className=" flex gap-5 justify-center mt-6">
                    <Link to="/register"><button className="btn bg-green-500 text-xl text-white font-medium">Public</button></Link>
                    <Link to="/admin"><button className="btn bg-green-500 text-xl text-white font-medium">Admin</button></Link>
                </div>
            </div>


            <img
                style={{
                    zIndex: 100
                }}
                className="absolute bottom-0 w-full  " src={wave} alt="" />


        </div>
    );
};

export default Home;