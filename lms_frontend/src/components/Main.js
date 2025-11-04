
import Navbar from "./Navbar";
import Hero from "./Hero";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Login from "./User/Login";
import Footer from "./Footer";
import {Routes, Route} from 'react-router-dom'



function Main() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/detail/:course_id" element= {<CourseDetail />} />
        <Route path="/user-dashboard" element= {<Dashboard />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default Main;
