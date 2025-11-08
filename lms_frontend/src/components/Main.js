
import Navbar from "./Navbar";
import Hero from "./Hero";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Login from "./User/Login";
import Footer from "./Footer";
import {Routes, Route} from 'react-router-dom'
import EnrolledCourses from "./User/EnrolledCourses";
import Profile from "./User/Profile";
import ChangePassword from "./User/ChangePassword";
import InstructorRegister from "./Instructor/Register";
import InstructorLogin from "./Instructor/Login";
import InstructorDashboard from "./Instructor/InstructorDashboard.js";
import MyCourses from "./Instructor/MyCourses.js";
import CreateCourse from "./Instructor/CreateCourse.js";



function Main() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/instructor-login" element= {<InstructorLogin/>} />
        <Route path="/register" element= {<Register />} />
        <Route path="/instructor-register" element= {<InstructorRegister />} />
        <Route path="/detail/:course_id" element= {<CourseDetail />} />
        <Route path="/user-dashboard" element= {<Dashboard />} />
        <Route path="/instructor-dashboard" element= {<InstructorDashboard />} />
        <Route path= "/enrolled-courses" element={<EnrolledCourses />}/>
        <Route path= "/my-courses" element={<MyCourses />}/>
        <Route path= "/create-course" element={<CreateCourse />}/>
        <Route path= "/profile" element={<Profile />}/>
        <Route path= "/change-password" element={<ChangePassword />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default Main;
