function Hero(){

    return(
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="cou1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                <div className="carousel-item">
                    <img src="cou2.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="cou3.jpg" class="d-block w-100" alt="..."/>
                </div>
                </div>
            </div>
        </div>
    
    )

}

export default Hero
