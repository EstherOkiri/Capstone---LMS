import { Link } from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";

function CreateCourse(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <InstructorSidebar />   
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Create Course</h5>
                        <div className="card-body">
                            <form>
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="course-title" class="form-label">Course Title </label>
                                        <input  className="form-control" id="course-title"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Description" className="form-label">Course Description</label>
                                        <input type="text" className="form-control" id="course-description" placeholder="course-description"/>
                                    </div>
                                    <div className="col-12">
                                        <label for="course-video" className="form-label">Course Video</label>
                                        <input type="file" class="form-control" id="course-video" placeholder="Browse.."/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="Technologies" className="form-label">Technologies</label>
                                        <input type="text" className="form-control" id="technologies" placeholder="technologies"/>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Create</button>
                                    </div>
                                   
                                    
                                </form>

                            </form>
                        </div>
                    </div>
                    
                </div>
                
                
               
            </div>
        </div>
    )

}

export default CreateCourse

 