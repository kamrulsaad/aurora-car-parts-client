import { Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts/Allproducts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
        <Route path="/purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
