

import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


function Profile(){
    return(

        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" ></input>
                            </div>
                            <div>
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                    
                    
                </section>
                
                
               
            </div>
        </div>
    )
}

export default Profile