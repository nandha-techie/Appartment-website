import B_logo from '../images/gaity-b-logo.jpg';
import Am_left_img from '../images/am-left-img.jpg'

const Amenities = ()=>{
    return(<>
            <div id="amenities" className="container-fluid pt-5">
                <div className="d-flex flex-column align-content-center flex-wrap">
                    <img src={B_logo} className=" align-self-center img_logo" height="50px" alt="logo"  />
                    <h3 className="display-6 text-white-50 text-white align-self-center">Where Happiness Grows</h3>
                    <div className="w-50 mb-2 align-self-center description">
                        <p className="pb-1 text-white-50">Welcome to our appartment with luxury amenities. Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value. Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value</p>
                    </div>
                    <hr className='bg-white mb-2' />
                    <h6 className="text-uppercase align-self-center text-white-50">Rera no</h6>
                    <p className="align-self-center text-white-50">TN/29/BUILDING/440/2022 DATED 27-10-22</p>
                    <button type="button" className="btn btn-sm primary-color text-white text-uppercase rounded-pill px-3 align-self-center">Walkthrough</button>
                </div>
            </div>
            <div className="container negative-top">
                <div className="row justify-content-center p-4 ">
                    <div className="col-xs-12 col-md-4 bg-white border border-white border-end-0  rounded-start-4 border-opacity-50 px-4 py-5" style={{borderWidth: "15px" }}>
                        <img src={Am_left_img} className="img-fluid" alt="amenites" />
                    </div>
                    <div className="col-xs-12 col-md-4 bg-white border border-primary border-start-0 border-5 border-white border-opacity-25 rounded-end-4 px-4 py-5">
                        <h6 className="text-color text-uppercase lh-1">Gaiety</h6>
                        <h3 className="display-6 lh-1 text-black-50">Location Advantage</h3>
                        <p className="text-uppercase fs-6 fw-medium">Intuitive homes where quality of life grows</p>
                        <ul className="custom-bullet">
                            <li>Air conditioned indoor game</li>
                            <li>Air conditioned indoor game</li>
                            <li>Air conditioned indoor game</li>
                            <li>Air conditioned indoor game</li>
                            <li>Air conditioned indoor game</li>
                            <li>Air conditioned indoor game</li>
                        </ul>
                        <button className='px-4 py-1 rounded-pill nav-btn text-uppercase'>Download Brochure</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Amenities;