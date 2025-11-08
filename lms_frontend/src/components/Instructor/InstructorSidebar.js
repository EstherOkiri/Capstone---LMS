import { Link } from "react-router-dom";

function InstructorSidebar(){
    return(
         <div className="card">
            <h5 className="card-header"> Dashboard</h5>
                <div className="list-group list-group-flush">
                    <Link to='/instructor-dashboard' className="list-group-item">Instructor Dashboard</Link>
                    <Link to='/my-courses' className="list-group-item">My Courses</Link>
                    <Link to='/create-courses' className="list-group-item">Create Course</Link>
                    <Link to='/my-students' className="list-group-item">My Students</Link>
                    <Link to='/profile' className="list-group-item">Profile</Link>
                    <Link to='/change-password' className="list-group-item">Change Password</Link>
                    <Link to='/login' className="list-group-item">Log Out</Link>
                </div>
            </div>


    )
}
export default InstructorSidebar