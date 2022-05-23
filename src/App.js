import { Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts/Allproducts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
