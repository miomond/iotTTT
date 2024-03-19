import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import LandingPage from "./pages/Landing/LandingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navpar from "./components/NAv/Navpar.jsx";
import LandinngFooterSection from "./components/footer/LandinngFooterSection";
import Bloger from "./pages/blog/Bloger.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import About from "./pages/about-us-page/About.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import Side from "./components/side/Side.jsx";
import UserFooter from "./components/User/UserFooter.jsx";
import UserLayout from "./pages/user/UserLayout.jsx";
import Dashboard from "./pages/user/dashboard/Dashboard.jsx";
import UserBlogs from "./pages/user/blogs/UserBlogs.jsx";
import { AuthProvider } from "./context/auth.jsx";
import { useAuth } from "./context/auth.jsx";
import { RequireAuth } from "./context/RequireAuth.jsx";
import FormEdit from "./pages/user/editForm/FormEdit.jsx";
import Profile from "./pages/user/profile/Profile.jsx";
import Blogering from "./pages/user/bostAblog/Blogering.jsx";
import TotalBlogs from "./pages/blog/TotalBlogs.jsx";
function App() {
  let auth = useAuth();


 return (
    <AuthProvider  >
      <Routes>
        <Route path="/"          element={<LandingPage />} />
        <Route path="/Blog"      element={<Bloger />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login"     element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/users"     element={<RequireAuth><UserLayout /></RequireAuth>}           >
          <Route path="dashboard" element={ <Dashboard />}  />
          <Route path="profile"   element={<Profile/>}    />
          {/* <Route path="myBlogs"   element={<UserBlogs />}  />
          <Route path="newblog"   element={<Blogering />}  />
          <Route path="allBlog"   element={<TotalBlogs />} />
          <Route path="likedBlog" element={<TotalBlogs />} />
        */}
        <Route path="userSettings/:id" element={<FormEdit/>} /> 
        </Route>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
