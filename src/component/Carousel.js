import Banner from '../images/banner.jpg';
import Img from '../images/img.jpg';


const Carousel = ()=>{
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide h-80" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Banner} className="d-block w-100" style={{height: '90vh'}} alt="..." />
                </div>
                <div className="carousel-item">
                <img src={Img} className="d-block w-100" style={{height: '90vh'}} alt="..." />
                </div>
                <div className="carousel-item">
                <img src={Banner} className="d-block w-100" style={{height: '90vh'}} alt="..." />
                </div>
            </div>
        </div>
    )
}
export default Carousel;