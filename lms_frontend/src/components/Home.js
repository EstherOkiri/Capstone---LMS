import { Link } from "react-router-dom";


function Home() {
  return (
    
    <div className="container mt-4">
      {/*Latest Courses*/}
      <h3 className="border-bottom pb-1 mb-4">Latest Courses<a href='#' className="float-end">See All</a></h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="cou1.jpg" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="cou2.jpg" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="cou1.jpg" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="cou3.jpg" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
      </div>
{/*Popular Courses*/}
      <h3 className="border-bottom pb-1 mb-4 mt-4">Popular Courses</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <a href= "#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title">Course Title</h5>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
  );
}

export default Home;