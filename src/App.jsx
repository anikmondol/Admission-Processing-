import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
