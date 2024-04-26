import Banner from '../images/banner.jpg';
import Img from '../images/img.jpg';

const Carousel = ()=>{
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide"  data-bs-interval="2000" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Banner} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Img} className="d-block w-100"   alt="..." />
                </div> 
                <div className="carousel-item">
                    <img src={Banner} className="d-block w-100"  alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly  " data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel;