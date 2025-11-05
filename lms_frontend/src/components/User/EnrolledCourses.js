import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"

function EnrolledCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
           
                <div className="card">
            
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>Php Development</td>
                                    <td><Link to="/">John Doe</Link></td>
                                    <td>
                                        <button className="btn btn-primary active">Delete Course</button>
                                    </td>
                                </tbody>

                            </table>
                        </div>
                    </div>
            </div>
            
            

        </div>
        

        


    )
}


export default EnrolledCourses