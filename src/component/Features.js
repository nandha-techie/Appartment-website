import FeatureIcon1 from '../images/features-icon1.jpg';
import FeatureIcon2 from '../images/features-icon2.jpg';
import FeatureIcon3 from '../images/features-icon3.jpg';
import FeatureIcon4 from '../images/features-icon4.jpg';
import FeatureIcon5 from '../images/features-icon5.jpg';

const Features = ()=>{
    return(
        <div className="container-fluid primary-color opacity-75 py-5">
            <div className="d-flex flex-column align-items-center text-white  py-3">
                <h6 className="lh-1">Greity</h6>
                <p className="display-6 lh-1">Future Living Features</p>
                <p>Welcome to our website, below attached all contact details for booking flat.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center text-white mb-3">
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon1} className='rounded-circle' alt="" />
                    <p>Change your drive</p> 
                </div>
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon2} className='rounded-circle' alt="" />
                    <p>Change your drive</p>
                </div>
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon3} className='rounded-circle' alt="" />
                    <p>Change your drive</p>
                </div>
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon4} className='rounded-circle' alt="" />
                    <p>Change your drive</p>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center text-white">
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon1} className='rounded-circle' alt="" />
                    <p>Change your drive</p>
                </div>
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon2} className='rounded-circle' alt="" />
                    <p>Change your drive</p>
                </div>
                <div className="d-flex flex-column align-items-center pe-5">
                    <img src={FeatureIcon3} className='rounded-circle' alt="" />
                    <p>Change your drive</p>
                </div>
            </div>
        </div>
    )
}

export default Features;