import { Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from "./Pages/AllProducts/Allproducts";
import AddReview from "./Pages/Dashboard/AddReview";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyItems from "./Pages/Dashboard/MyItems";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import NotFound from "./Pages/Shared/NotFound";

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
          <Route index element={<MyItems></MyItems>}></Route>
          <Route path="/dashboard/myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/addReview" element={<AddReview></AddReview>}></Route>
          <Route path="/dashboard/allUsers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="/dashboard/addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="/dashboard/payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer position="top-center" transition={Slide}></ToastContainer>
    </div>
  );
}

export default App;
