import { Link } from "react-router-dom";

function Sidebar(){
    return(
         <div className="card">
            <h5 className="card-header"> Dashboard</h5>
                <div className="list-group list-group-flush">
                    
                    <Link to='/enrolled-courses' className="list-group-item">Enrolled Courses</Link>
                    
                    <Link to='/profile' className="list-group-item">Profile</Link>
                    <Link to='/change-password' className="list-group-item">Change Password</Link>
                    <Link to='/login' className="list-group-item">Log Out</Link>
                </div>
            </div>


    )
}
export default Sidebar